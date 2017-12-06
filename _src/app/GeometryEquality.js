define([], () => {
    return (a, b) => {
        // polygon > polyline > point
        if (a[1] === b[1]) {
            return 0;
        }

        if (a[1] === 'Point') {
            return -1;
        }

        if (a[1] === 'Polygon') {
            return 1;
        }

        if (a[1] === 'Polyline') {
            if (b[1] === 'Point') {
                return 1;
            }

            return -1;
        }

        return 0;
    };
});
