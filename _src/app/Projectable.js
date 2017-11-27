define([
    'dojo/_base/declare',

    'esri/SpatialReference',
    'esri/tasks/GeometryService',
    'esri/tasks/ProjectParameters'
], (
    declare,

    SpatialReference,
    GeometryService,
    ProjectParameters
) => {
    return declare(null, {
        initGeometryService(url) {
            // summary:
            //      wire events, and such
            console.info('app/Projectable::initGeometryService', arguments);

            this.geometryService = new GeometryService(url);
        },
        project(geometries, wkid, transformation) {
            // summary:
            //      wire events, and such
            console.info('app/Projectable::project', arguments);

            const params = new ProjectParameters();

            if (!Array.isArray(geometries)) {
                geometries = [geometries];
            }

            params.geometries = geometries;
            params.outSR = new SpatialReference(wkid);

            if (transformation) {
                params.transformation = { name: transformation };
            }

            return this.geometryService.project(params);
        }
    });
});
