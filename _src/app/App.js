define([
    './config',
    './MapController',
    './GeometryEquality',
    './LayerList',

    'dijit/_TemplatedMixin',
    'dijit/_WidgetBase',

    'dojo/dom-construct',
    'dojo/text!./templates/App.html',
    'dojo/topic',
    'dojo/request',
    'dojo/_base/declare',

    'esri/map',
    'esri/geometry/Extent',
    'esri/tasks/IdentifyTask',
    'esri/tasks/IdentifyParameters',
    'esri/tasks/IdentifyResult',

    'esri/layers/DynamicLayerInfo',
    'esri/layers/TableDataSource',
    'esri/layers/LayerDataSource',
    'esri/layers/LayerDrawingOptions',
    'esri/renderers/SimpleRenderer',
    'esri/symbols/SimpleFillSymbol',
    'esri/symbols/SimpleLineSymbol',
    'esri/symbols/SimpleMarkerSymbol',
    'esri/Color',

    'layer-selector',

    'toaster/Toaster'
], (
    config,
    mapController,
    comparison,
    LayerList,

    _TemplatedMixin,
    _WidgetBase,

    domConstruct,
    template,
    topic,
    request,
    declare,

    Map,
    Extent,
    IdentifyTask,
    IdentifyParameters,
    IdentifyResult,

    DynamicLayerInfo,
    TableDataSource,
    LayerDataSource,
    LayerDrawingOptions,
    SimpleRenderer,
    SimpleFillSymbol,
    SimpleLineSymbol,
    SimpleMarkerSymbol,
    Color,

    LayerSelector,

    Toaster
) => {
    return declare([_WidgetBase, _TemplatedMixin], {
        // summary:
        //      The main widget for the app

        widgetsInTemplate: true,
        templateString: template,
        baseClass: 'app',

        // childWidgets: Object[]
        //      container for holding custom child widgets
        childWidgets: null,

        constructor() {
            // summary:
            //      first function to fire after page loads
            console.info('app/App::constructor', arguments);

            config.app = this;
            this.childWidgets = [];

            this.inherited(arguments);
        },
        postCreate() {
            // summary:
            //      Fires when
            console.info('app/App::postCreate', arguments);

            this.createMap();

            this.childWidgets.push(
                new Toaster.default({ // eslint-disable-line new-cap
                    topic: config.topics.toast
                }, domConstruct.create('div', {}, document.body))
            );

            config.facilities.forEach((name) => {
                domConstruct.create('option', {
                    value: name.replace(/\s/g, ''),
                    innerHTML: name
                }, this.facilityNode);
            });

            request('./map.json', {
                handleAs: 'json',
                method: 'get'
            }).then((response) => {
                config.layerMapping = response;
            });

            this.inherited(arguments);

            this.setupConnections();
        },
        setupConnections() {
            // summary:
            //      Fires when
            console.info('app/App::setupConnections', arguments);

            mapController.map.on('click', (evt) => {
                this.identifyOptions.mapExtent = mapController.map.extent;
                this.identifyOptions.layerIds = mapController.activeLayer.visibleLayers;
                this.identifyOptions.geometry = evt.mapPoint;
                this.identifyOptions.dynamicLayerInfos = this.currentLayers;

                this.identifyTask.execute(this.identifyOptions).then((identifyResults) => {
                    const templateData = identifyResults.map((result) => {
                        return {
                            name: result.layerName,
                            geometry: result.feature.geometry,
                            attributes: Object.keys(result.feature.attributes).filter((key) => {
                                if (result.feature.attributes[key].toLowerCase() === 'null' ||
                                    ['objectid', 'shape', 'shape_length', 'globalid'].indexOf(key.toLowerCase()) > -1) {
                                    return false;
                                }

                                return true;
                            }).map((label) => {
                                return {
                                    label: label,
                                    value: result.feature.attributes[label]
                                };
                            })
                        };
                    });

                    let templateBuilder = '';
                    templateData.forEach((item) => {
                        templateBuilder += `<h5>${item.name}</h5><label>Attributes</label>`;
                        item.attributes.forEach((attribute) => {
                            templateBuilder += `<div>${attribute.label}: ${attribute.value}</div>`;
                        });
                    });

                    this.identifyNode.innerHTML = templateBuilder;
                });
            });
        },
        startup() {
            // summary:
            //      Fires after postCreate when all of the child widgets are finished laying out.
            console.info('app/App::startup', arguments);

            this.childWidgets.forEach((widget) => {
                console.log(widget.declaredClass);
                this.own(widget);
                widget.startup();
            }, this);

            this.inherited(arguments);
        },
        createMap() {
            // summary:
            //      Sets up the map
            console.info('app/App::createMap', arguments);

            mapController.initialize(new Map(this.mapNode, {
                useDefaultBaseMap: false,
                extent: new Extent({
                    xmax: -12010849.397533866,
                    xmin: -12898741.918094235,
                    ymax: 5224652.298632992,
                    ymin: 4422369.249751998,
                    spatialReference: {
                        wkid: 3857
                    }
                })
            }));

            this.identifyOptions = new IdentifyParameters();
            this.identifyOptions.width = mapController.map.width;
            this.identifyOptions.height = mapController.map.height;
            this.identifyOptions.layerOption = IdentifyParameters.LAYER_OPTION_VISIBLE;
            this.identifyOptions.tolerance = 3;
            this.identifyOptions.returnGeometry = true;
            this.identifyOptions.spatialReference = mapController.map.spatialReference;

            this.childWidgets.push(
                new LayerSelector({
                    map: mapController.map,
                    right: false,
                    quadWord: config.quadWord,
                    baseLayers: ['Hybrid', 'Lite', 'Terrain', 'Topo', 'Color IR']
                })
            );

            mapController.toggleLayer(config.layer, true);
            this.identifyTask = new IdentifyTask(config.layer.url);
        },
        updateFacility(evt) {
            // summary:
            //      updates the map view and the identify task for a layer change
            //
            console.info('app/App:updateFacility', arguments);

            const facility = evt.target.value;
            const groupInfo = config.layerMapping[facility];
            const layerNameKeys = Object.keys(groupInfo.layers);
            this.currentLayers = [];
            const options = [];
            const totalKeys = layerNameKeys.length;

            groupInfo.layers.sort(comparison).forEach((item, index) => {
                const [joinedName, type] = item;
                const [name, displayName] = joinedName.split(':');
                const dynamicLayerInfo = new DynamicLayerInfo();
                dynamicLayerInfo.id = index;
                dynamicLayerInfo.name = displayName || name;

                const dataSource = new TableDataSource();
                dataSource.workspaceId = 'LayerBench';
                dataSource.dataSourceName = `${facility}_${name}`;

                // and now a layer source
                const layerSource = new LayerDataSource();
                layerSource.dataSource = dataSource;
                dynamicLayerInfo.source = layerSource;

                const fractionOfSpectrum = (index + 1) / totalKeys;
                const color = Color.fromRgb(window.d3.interpolateSpectral(fractionOfSpectrum));

                let symbol = new SimpleMarkerSymbol(config.symbols.point);

                if (type === 'Polyline') {
                    symbol = new SimpleLineSymbol(config.symbols.line);
                } else if (type === 'Polygon') {
                    symbol = new SimpleFillSymbol(config.symbols.poly);
                }

                symbol = symbol.setColor(color);

                const drawingOptions = new LayerDrawingOptions();
                drawingOptions.renderer = new SimpleRenderer(symbol);

                options[index] = drawingOptions;
                this.currentLayers.push(dynamicLayerInfo);
            });

            if (this.layerList) {
                this.layerList.destroy();
                this.layerList = null;
            }

            this.layerList = new LayerList({
                mapController: mapController,
                dynamicLayers: this.currentLayers,
                renderers: options
            }).placeAt(this.toolbarNode);

            mapController.activeLayer[0].setLayerDrawingOptions(options);
            mapController.activeLayer[0].setDynamicLayerInfos(this.currentLayers, false);

            mapController.map.setExtent(new Extent(groupInfo.extent), true);
        }
    });
});
