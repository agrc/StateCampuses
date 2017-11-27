define([
    './config',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetBase',

    'dojo/_base/declare',
    'dojo/topic',
    'dojo/text!app/templates/ReferenceItem.html'
], function (
    config,
    _TemplatedMixin,
    _WidgetBase,

    declare,
    topic,
    template
) {
    return declare([_WidgetBase, _TemplatedMixin], {
        // description:
        //      A toggleable layer inside the ReferenceData widget
        templateString: template,
        baseClass: 'reference-item btn btn-default btn-xs',

        // Properties to be sent into constructor

        postCreate() {
            // summary:
            //      Overrides method of same name in dijit._Widget.
            console.info('app/ReferenceItem::postCreate', arguments);

            this.inherited(arguments);
        },
        toggleLayer() {
            // summary:
            //      toggles the visibility of the layer associated with this widget
            // show: Boolean
            console.info('app/ReferenceItem:toggleLayer', arguments);

            window.setTimeout(() => topic.publish(config.topics.toggleReferenceLayer, this, this.checkbox.checked), 0);
        }
    });
});
