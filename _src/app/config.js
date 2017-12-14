/* jshint maxlen:false */
define([
    'dojo/has',
    'dojo/request/xhr',

    'esri/config',
    'esri/symbols/SimpleFillSymbol'
], (
    has,
    xhr,

    esriConfig,
    SimpleFillSymbol
) => {
    let gisServerBaseUrl;
    let quadWord;
    let apiKey;
    const servicePath = '/arcgis/rest/services/StateCampuses';

    if (has('agrc-build') === 'prod') {
        quadWord = '';
    } else if (has('agrc-build') === 'stage') {
        gisServerBaseUrl = 'http://test.mapserv.utah.gov';
        quadWord = 'opera-event-little-pinball';
        apiKey = '';
    } else {
        // localhost
        gisServerBaseUrl = 'http://localhost';

        xhr(require.baseUrl + 'secrets.json', {
            handleAs: 'json',
            sync: true
        }).then((secrets) => {
            quadWord = secrets.quadWord;
        }, () => {
            throw 'Error getting secrets!';
        });
    }

    const config = {
        // app: app.App
        //      global reference to App
        app: null,

        // cache: app.cache
        //      a spot to cache some data
        cache: {},

        // version.: String
        //      The version number.
        version: '1.2.1',

        // apiKey: String
        //      The api key used for services on api.mapserv.utah.gov
        // acquire at developer.mapserv.utah.gov
        apiKey: apiKey,

        quadWord: quadWord,

        layer: {
            name: 'Dynamic Workspace',
            url: `${gisServerBaseUrl}${servicePath}/Blank/MapServer`,
            type: 'dynamic'
        },
        topics: {
            toast: '1'
        },
        symbols: {
            point: {
                size: 8,
                color: [197, 252, 113, 200], // eslint-disable-line no-magic-numbers
                angle: 0,
                xoffset: 0,
                yoffset: 0,
                type: 'esriSMS',
                style: 'esriSMSCircle',
                outline: {
                    color: [11, 65, 48, 255], // eslint-disable-line no-magic-numbers
                    width: 1,
                    type: 'esriSLS',
                    style: 'esriSLSSolid'
                }
            },
            line: {
                color: [197, 252, 113, 255], // eslint-disable-line no-magic-numbers
                width: 3,
                type: 'esriSLS',
                style: 'esriSLSSolid'
            },
            poly: {
                color: [197, 252, 113, 200], // eslint-disable-line no-magic-numbers
                outline: {
                    color: [11, 65, 48, 255], // eslint-disable-line no-magic-numbers
                    width: 1,
                    type: 'esriSLS',
                    style: 'esriSLSSolid'
                },
                type: 'esriSFS',
                style: 'esriSFSSolid'
            },
            drawing: new SimpleFillSymbol({
                color: [11, 65, 48, 200], // eslint-disable-line no-magic-numbers
                outline: {
                    color: [197, 252, 113, 255], // eslint-disable-line no-magic-numbers
                    width: 1,
                    type: 'esriSLS',
                    style: 'esriSLSSolid'
                },
                type: 'esriSFS',
                style: 'esriSFSSolid'
            }),
            selected: {
                point: {
                    type: 'esriSMS',
                    style: 'esriSMSCircle',
                    color: [255, 220, 0], // eslint-disable-line no-magic-numbers
                    size: 10,
                    angle: 0,
                    xoffset: 0,
                    yoffset: 0,
                    outline: {
                        color: [0, 0, 0, 255], // eslint-disable-line no-magic-numbers
                        width: 1
                    }
                },
                line: {
                    type: 'esriSLS',
                    style: 'esriSLSSolid',
                    color: [255, 220, 0], // eslint-disable-line no-magic-numbers
                    width: 4
                },
                poly: {
                    type: 'esriSFS',
                    style: 'esriSFSSolid',
                    color: [255, 220, 0], // eslint-disable-line no-magic-numbers
                    outline: {
                        type: 'esriSLS',
                        style: 'esriSLSSolid',
                        color: [110, 110, 110, 255], // eslint-disable-line no-magic-numbers
                        width: 0.5
                    }
                }
            }
        },
        facilities: ['DHSDC', 'DHSSH', 'Dixie State', 'Fairpark', 'Gunnison Prison', 'Ogden ATC', 'SLCC Jordan',
            'SLCC Meadowbrook', 'SLCC Miller', 'SLCC Redwood', 'SLCC South City', 'Snow College Ephraim',
            'Southern Utah', 'USU Eastern', 'USU Eastern Blanding', 'USU Logan', 'Utah State Captiol',
            'Utah Valley', 'Weber State', 'Weber State Davis']
    };

    esriConfig.defaults.io.corsEnabledServers.push('mapserv.utah.gov');
    esriConfig.defaults.io.corsEnabledServers.push('api.mapserv.utah.gov');
    esriConfig.defaults.io.corsEnabledServers.push('discover.agrc.utah.gov');
    esriConfig.defaults.io.corsEnabledServers.push(gisServerBaseUrl);
    esriConfig.defaults.map.zoomSymbol.outline.color = [77, 137, 134, 255]; // eslint-disable-line no-magic-numbers

    return config;
});
