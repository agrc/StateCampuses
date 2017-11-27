define([
    'dojo/dom-construct',
    'dojo/string',
    'dojo/on',
    'dojo/mouse',
    'dojo/_base/declare',
    'dojo/text!./templates/LegendRow.html',

    'dojox/gfx',

    'dijit/Tooltip',

    // use esri/request so that LoginRegister can add token if needed
    'esri/request',
    'esri/renderers/jsonUtils'

], (
    domConstruct,
    dojoString,
    on,
    mouse,
    declare,
    rowTemplate,

    gfx,

    Tooltip,

    request,
    rendererUtils
) => {
    return declare([], {
        // description:
        //      Builds a legend for a specific layer within a map service.

        // Properties to be sent into constructor

        // header: String (optional)
        //      text that shows above the legend items
        header: null,

        swatchSize: 10,

        postCreate() {
            // summary:
            //      Overrides method of same name in dijit._Widget.
            // tags:
            //      private
            console.info('app/_legendMixin::postCreate', arguments);

            if (!this.legend) {
                return domConstruct.destroy(this.legendTip);
            }

            this.tooltip = new Tooltip({
                connectId: [this.legendTip]
            });

            this.tooltip.startup();

            this.own(this.tooltip);

            on(this.legendTip, mouse.enter, () => {
                const requestObj = {
                    url: this.url + '/legend',
                    content: { f: 'json' }
                };

                let node = this.legendNode;

                if (node) {
                    this.showLegend(node);
                }

                request(requestObj).then((response) => {
                    if (response.layers) { // MapServer
                        response.layers.forEach((layer) => {
                            if (layer.layerId !== this.layerIndex) {
                                return;
                            }

                            node = this._buildLegend(layer.legend);
                        });
                    } else if (response.drawingInfo.renderer) {
                        node = this._buildLegendFromRenderer(rendererUtils.fromJson(response.drawingInfo.renderer));
                    }

                    this.showLegend(node);
                });
            });
        },
        showLegend(legendNode) {
            // summary:
            //      shows the node with the legend inside it
            //
            console.info('app/_legendMixin:showLegend', arguments);

            if (!legendNode) {
                return;
            }

            domConstruct.empty(this.tooltip.domNode);
            this.tooltip.domNode.appendChild(legendNode);
        },
        _buildLegend(items) {
            // summary:
            //      builds the legend elements from the items array
            // items: Object[]
            console.info('app/_legendMixin::_buildLegend', arguments);

            const legendNode = domConstruct.create('div');

            items.forEach((item) => {
                domConstruct.place(dojoString.substitute(rowTemplate, item), legendNode);
            });

            return legendNode;
        },
        _buildLegendFromRenderer(renderer) {
            // summary:
            //      creates svg items from the render item symbols
            // the esri renderer
            console.info('app/_legendMixin::_buildLegendFromRenderer', arguments);

            const legendNode = domConstruct.create('div');

            let items = [];

            if (renderer.infos) {
                items = renderer.infos;
            } else {
                items.push(renderer);
            }

            items.forEach((info) => {
                const shape = info.symbol.getShapeDescriptors();
                const node = domConstruct.create('div', {
                    class: 'legend-item'
                }, legendNode, 'last');
                const surface = gfx.createSurface(node, this.swatchSize, this.swatchSize);

                surface.createShape(shape.defaultShape)
                    .setFill(shape.fill)
                    .setStroke(shape.stroke);

                domConstruct.create('span', {
                    innerHTML: info.label,
                    class: 'legend-item--label'
                }, node, 'last');
            }, this);

            return legendNode;
        }
    });
});
