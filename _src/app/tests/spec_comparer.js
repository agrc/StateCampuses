require([
    'app/GeometryEquality'
], (subject) => {
    describe('comparer', () => {
        it('sorts points before lines', () => {
            const geoms = [[null, 'Polyline'], [null, 'Point']];

            geoms.sort(subject);

            expect(geoms.map((x) => x[1])).toEqual(['Point', 'Polyline']);
        });
        it('sorts points before polygons', () => {
            const geoms = [[null, 'Polygon'], [null, 'Point']];

            geoms.sort(subject);

            expect(geoms.map((x) => x[1])).toEqual(['Point', 'Polygon']);
        });
        it('sorts polygons after polylines', () => {
            const geoms = [[null, 'Polygon'], [null, 'Polyline']];

            geoms.sort(subject);

            expect(geoms.map((x) => x[1])).toEqual(['Polyline', 'Polygon']);
        });
        it('sorts polygons after points', () => {
            const geoms = [[null, 'Polygon'], [null, 'Point']];

            geoms.sort(subject);

            expect(geoms.map((x) => x[1])).toEqual(['Point', 'Polygon']);
        });
        it('sorts polygons after polylines after  points', () => {
            const geoms = [[null, 'Polygon'], [null, 'Point'], [null, 'Polyline']];

            geoms.sort(subject);

            expect(geoms.map((x) => x[1])).toEqual(['Point', 'Polyline', 'Polygon']);
        });
    });
});
