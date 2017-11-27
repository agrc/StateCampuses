define([
    './config',
    './_legendMixin',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetBase',

    'dojo/_base/declare',
    'dojo/topic',
    'dojo/text!./templates/LayerItem.html'
], function (
    config,
    _legendMixin,

    _TemplatedMixin,
    _WidgetBase,

    declare,
    topic,
    template
) {
    return declare([_WidgetBase, _TemplatedMixin, _legendMixin], {
        // description:
        //      A toggleable layer inside the ReferenceData widget
        templateString: template,
        baseClass: 'layer-item panel-toggler btn btn-default btn-xs',

        // Properties to be sent into constructor
        // name: string
        // summary:
        //      the name of the layer to show in the UI
        name: '',

        // url: String
        //      the url to the service endpoint
        url: '',

        // layerIndex: Number
        //      the index of the layer with a dynamic map service
        layerIndex: null,

        // type: String (dynamic | cached | range)
        //      the type of layer to create
        type: '',

        // legend: Boolean
        //      display a legend tooltip
        legend: false,

        postCreate() {
            // summary:
            //      Overrides method of same name in dijit._Widget.
            console.info('app/LayerItem::postCreate', arguments);

            this.inherited(arguments);
        },
        toggleLayer() {
            // summary:
            //      toggles the visibility of the layer associated with this widget
            // show: Boolean
            console.info('app/LayerItem:toggleLayer', arguments);

            window.setTimeout(() => topic.publish(config.topics.toggleLayer, this, this.checkbox.checked), 0);
        }
    });
});
