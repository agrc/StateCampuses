define([
    './config',
    './LayerItem',

    'dijit/_TemplatedMixin',
    'dijit/_WidgetBase',

    'dojo/_base/declare',
    'dojo/dom-construct',
    'dojo/text!app/templates/ReferenceData.html'
], function (
    config,
    LayerItem,
    _TemplatedMixin,
    _WidgetBase,

    declare,
    domConstruct,
    template
) {
    return declare([_WidgetBase, _TemplatedMixin], {
        // description:
        //      A widget to hold the reference data and allow it the visibility to be toggled on and off
        templateString: template,
        baseClass: 'reference-data',

        // Properties to be sent into constructor

        postCreate() {
            // summary:
            //      Overrides method of same name in dijit._Widget.
            console.info('app/ReferenceData::postCreate', arguments);

            config.supportLayers.forEach(function (l) {
                this.own(new LayerItem(l, domConstruct.create('div', null, this.container)));
            }, this);

            this.inherited(arguments);
        },
        setupConnections() {
            // summary:
            //      wire events, and such
            console.info('app/ReferenceData::setupConnections', arguments);
        }
    });
});
