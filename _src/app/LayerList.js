define([
    'dijit/_TemplatedMixin',
    'dijit/_WidgetBase',

    'dojo/dom-construct',
    'dojo/on',

    'dojo/_base/declare',
    'dojo/text!./templates/LayerList.html'
], (
    _TemplatedMixin,
    _WidgetBase,

    domConstruct,
    on,

    declare,
    template
) => {
    return declare([_WidgetBase, _TemplatedMixin], {
        // description:
        //      A layer list that works with dynamic layer infos
        templateString: template,
        baseClass: 'layer-list',

        // Properties to be sent into constructor

        mapController: null,
        dynamicLayers: null,
        renderers: null,

        postCreate() {
            // summary:
            //      Overrides method of same name in dijit._Widget.
            console.info('app/LayerList::postCreate', arguments);

            this.setupConnections();

            this.dynamicLayers.sort((x, y) => {
                const a = x.name.toUpperCase();
                const b = y.name.toUpperCase();

                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }

                return 0;
            }).forEach((layer) => {
                const checkbox = `<label class="layer-list-label">
                                    <input class="layer-list-layer" type="checkbox" checked value="${layer.id}">
                                  ${layer.name}</label>`;

                this.placement.appendChild(domConstruct.toDom(checkbox));
            });

            this.inherited(arguments);
        },
        setupConnections() {
            // summary:
            //      wire events, and such
            console.info('app/LayerList::setupConnections', arguments);

            this.own(
                on(this.placement, 'change', (evt) => this.updateLayers(+evt.target.value, evt.target.checked))
            );
        },
        updateLayers(id, visibile) {
            // summary:
            //      updates the dynamic layers
            // id: number index of layer
            console.info('app/LayerList:updateLayers', arguments);

            const layer = this.dynamicLayers.filter((dynamicLayer) => dynamicLayer.id === id)[0];
            layer.defaultVisibility = visibile;

            this.mapController.activeLayer[0].setDynamicLayerInfos(this.dynamicLayers, false);
        }
    });
});
