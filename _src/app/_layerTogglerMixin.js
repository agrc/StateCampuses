define([
    'dojo/_base/lang',

    'esri/layers/ArcGISDynamicMapServiceLayer',
    'esri/layers/ArcGISTiledMapServiceLayer',
    'esri/layers/FeatureLayer'
], (
    lang,

    ArcGISDynamicMapServiceLayer,
    ArcGISTiledMapServiceLayer,
    FeatureLayer
) => {
    return {
        // description:
        //      A mixin to create layers and turn them on and off

        // layerItems: Object
        //      Container to store reference layer objects
        layerItems: {},

        kindaTransparent: 0.85,

        toggleLayer(layerItem, show) {
            // summary:
            //      creates and toggles reference layer
            // layerItem: LayerItem
            // show: Boolean
            console.info('app/mapController:toggleLayer', arguments);

            var layer;
            if (Object.keys(this.layerItems).indexOf(layerItem.name) > -1) {
                layer = this.layerItems[layerItem.name].layer;
            } else {
                var layerTypes = {
                    dynamic: {
                        Class: ArcGISDynamicMapServiceLayer,
                        options: {
                            opacity: layerItem.opacity || this.kindaTransparent
                        }
                    },
                    cached: {
                        Class: ArcGISTiledMapServiceLayer,
                        options: {
                            opacity: layerItem.opacity || this.kindaTransparent
                        }
                    },
                    feature: {
                        Class: FeatureLayer,
                        options: {
                            opacity: layerItem.opacity || this.kindaTransparent
                        }
                    }
                };

                var layerType = layerTypes[layerItem.type];

                if (layerItem.options) {
                    layerType.options = lang.mixin(layerType.options, layerItem.options);
                }

                layer = new layerType.Class(layerItem.url, layerType.options);

                if (layerItem.type === 'dynamic') {
                    var vLayers = [layerItem.layerIndex];
                    if (layerItem.labelsIndex && this.showReferenceLayerLabels) {
                        vLayers.push(layerItem.labelsIndex);
                    }

                    layer.setVisibleLayers(vLayers);
                }

                layer.on('load', () => {
                    this.map.addLayer(layer);
                });

                layerItem.layer = layer;
                this.layerItems[layerItem.name] = layerItem;
            }

            if (show && layerItem.definitionQuery && layerItem.definitionQuery.length) {
                layer.setDefinitionExpression(layerItem.definitionQuery);
            }

            if (show) {
                this.activeLayer.push(layer);
            }

            if (!show) {
                this.activeLayer.pop(layer);
            }

            if (layerItem.selectionSymbol) {
                layer.setSelectionSymbol(layerItem.selectionSymbol);
            }

            layer.setVisibility(show);

            return layer;
        }
    };
});
