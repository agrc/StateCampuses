module.exports = function configure(grunt) {
    require('load-grunt-tasks')(grunt);

    var jsAppFiles = '_src/app/**/*.js';
    var otherFiles = [
        '_src/app/**/*.html',
        '_src/app/**/*.styl',
        '_src/index.html',
        '_src/ChangeLog.html'
    ];
    var gruntFile = 'GruntFile.js';
    var internFile = 'tests/intern.js';
    var jsFiles = [
        jsAppFiles,
        gruntFile,
        internFile,
        'profiles/**/*.js'
    ];
    var bumpFiles = [
        'package.json',
        'bower.json',
        '_src/app/package.json',
        '_src/app/config.js'
    ];
    var deployFiles = [
        '**',
        '!**/*.uncompressed.js',
        '!**/*consoleStripped.js',
        '!**/bootstrap/less/**',
        '!**/bootstrap/test-infra/**',
        '!**/tests/**',
        '!build-report.txt',
        '!components-jasmine/**',
        '!favico.js/**',
        '!jasmine-favicon-reporter/**',
        '!jasmine-jsreporter/**',
        '!stubmodule/**',
        '!util/**'
    ];
    var deployDir = 'statecampuses';

    var secrets;

    try {
        secrets = grunt.file.readJSON('secrets.json');
    } catch (e) {
        // swallow for build server

        // still print a message so you can catch bad syntax in the secrets file.
        grunt.log.write(e);

        secrets = {
            stage: {
                host: '',
                username: '',
                password: ''
            },
            prod: {
                host: '',
                username: '',
                password: ''
            }
        };
    }

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        amdcheck: {
            main: {
                options: {
                    removeUnusedDependencies: false
                },
                files: [{
                    src: [
                        'src/app/**/*.js'
                    ]
                }]
            }
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015-without-strict']
            },
            src: {
                files: [{
                    expand: true,
                    cwd: '_src',
                    src: ['**/*.js'],
                    dest: 'src'
                }]
            }
        },
        bump: {
            options: {
                files: bumpFiles,
                commitFiles: bumpFiles.concat('_src/ChangeLog.html'),
                push: false
            }
        },
        clean: {
            src: ['src/app'],
            build: ['dist'],
            deploy: ['deploy']
        },
        compress: {
            main: {
                options: {
                    archive: 'deploy/deploy.zip'
                },
                files: [{
                    src: deployFiles,
                    dest: './',
                    cwd: 'dist/',
                    expand: true
                }]
            }
        },
        connect: {
            uses_defaults: { // eslint-disable-line camelcase
            }
        },
        copy: {
            dist: {
                src: '_src/ChangeLog.html',
                dest: 'dist/ChangeLog.html'
            },
            src: {
                expand: true,
                cwd: '_src',
                src: ['**/*.html', '**/*.css', '**/*.png', '**/*.jpg', 'secrets.json', 'app/packages.json', 'map.json'],
                dest: 'src'
            },
            packages: {
                expand: true,
                cwd: 'src',
                src: ['bootstrap/dist/**/*.*', 'map.json', 'secrets.json'],
                dest: 'dist'
            }
        },
        dojo: {
            local: {
                options: {
                    profiles: ['profiles/build.profile.js'],
                    releaseDir: './dist'
                }
            },
            stage: {
                options: {
                    // You can also specify options to be used in all your tasks
                    profiles: ['profiles/stage.build.profile.js', 'profiles/build.profile.js']
                }
            },
            prod: {
                options: {
                    // You can also specify options to be used in all your tasks
                    profiles: ['profiles/prod.build.profile.js', 'profiles/build.profile.js']
                }
            },
            options: {
                // You can also specify options to be used in all your tasks
                dojo: 'src/dojo/dojo.js',
                load: 'build',
                releaseDir: '../dist',
                requires: ['src/app/packages.js', 'src/app/run.js'],
                basePath: './src'
            }
        },
        eslint: {
            options: {
                configFile: '.eslintrc'
            },
            main: {
                src: jsFiles
            }
        },
        imagemin: {
            main: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: '_src/',
                    // exclude tests because some images in dojox throw errors
                    src: ['**/*.{png,jpg,gif}', '!**/tests/**/*.*'],
                    dest: '_src/'
                }]
            }
        },
        jasmine: {
            main: {
                options: {
                    specs: ['_src/app/**/spec*.js'],
                    vendor: [
                        'src/app/tests/jasmineTestBootstrap.js',
                        'src/dojo/dojo.js',
                        'src/app/packages.js'
                    ],
                    host: 'http://localhost:8000',
                    keepRunner: true
                }
            }
        },
        parallel: {
            options: {
                grunt: true
            },
            assets: {
                tasks: ['eslint', 'amdcheck', 'stylus', 'babel', 'copy:src', 'jasmine:main:build']
            },
            buildAssets: {
                tasks: ['eslint', 'clean:build', 'stylus', 'babel', 'copy:src']
            }
        },
        processhtml: {
            options: {},
            main: {
                files: {
                    'dist/index.html': ['src/index.html'],
                    'dist/user_admin.html': ['src/user_admin.html']
                }
            }
        },
        secrets: secrets,
        sftp: {
            stage: {
                files: {
                    './': 'deploy/deploy.zip'
                },
                options: {
                    host: '<%= secrets.stage.host %>',
                    username: '<%= secrets.stage.username %>',
                    password: '<%= secrets.stage.password %>'
                }
            },
            prod: {
                files: {
                    './': 'deploy/deploy.zip'
                },
                options: {
                    host: '<%= secrets.prod.host %>',
                    username: '<%= secrets.prod.username %>',
                    password: '<%= secrets.prod.password %>'
                }
            },
            options: {
                path: './wwwroot/' + deployDir + '/',
                srcBasePath: 'deploy/',
                showProgress: true
            }
        },
        sshexec: {
            stage: {
                command: ['cd wwwroot/' + deployDir, 'unzip -oq deploy.zip', 'rm deploy.zip'].join(';'),
                options: {
                    host: '<%= secrets.stage.host %>',
                    username: '<%= secrets.stage.username %>',
                    password: '<%= secrets.stage.password %>'
                }
            },
            prod: {
                command: ['cd wwwroot/' + deployDir, 'unzip -oq deploy.zip', 'rm deploy.zip'].join(';'),
                options: {
                    host: '<%= secrets.prod.host %>',
                    username: '<%= secrets.prod.username %>',
                    password: '<%= secrets.prod.password %>'
                }
            }
        },
        stylint: {
            src: ['_src/**/*.styl']
        },
        stylus: {
            main: {
                options: {
                    compress: false,
                    'resolve url': true
                },
                files: [{
                    expand: true,
                    cwd: '_src/',
                    src: ['app/**/*.styl'],
                    dest: 'src/',
                    ext: '.css'
                }]
            }
        },
        uglify: {
            options: {
                preserveComments: false,
                sourceMap: true,
                compress: {
                    drop_console: true, // eslint-disable-line camelcase
                    passes: 2,
                    dead_code: true // eslint-disable-line camelcase
                }
            },
            stage: {
                options: {
                    compress: {
                        drop_console: false // eslint-disable-line camelcase
                    }
                },
                src: ['dist/dojo/dojo.js'],
                dest: 'dist/dojo/dojo.js'
            },
            prod: {
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: '**/*.js',
                    dest: 'dist'
                }]
            }
        },
        watch: {
            src: {
                files: jsFiles.concat(otherFiles),
                options: { livereload: true },
                tasks: ['eslint', 'amdcheck', 'stylint', 'stylus', 'babel',
                    'copy:src', 'jasmine:main:build']
            }
        }
    });

    grunt.registerTask('default', [
        'clean:src',
        'parallel:assets',
        'copy:src',
        'connect',
        'watch'
    ]);
    grunt.registerTask('build', [
        'clean:src',
        'clean:build',
        'parallel:buildAssets',
        'newer:imagemin:main',
        'dojo:local',
        'copy:packages',
        'processhtml:main'
    ]);
    grunt.registerTask('build-stage', [
        'clean:src',
        'clean:build',
        'parallel:buildAssets',
        'newer:imagemin:main',
        'dojo:stage',
        'uglify:stage',
        'copy:packages',
        'processhtml:main'
    ]);
    grunt.registerTask('deploy-stage', [
        'clean:deploy',
        'compress:main',
        'sftp:stage',
        'sshexec:stage',
        'clean:build',
        'clean:deploy'
    ]);
    grunt.registerTask('build-prod', [
        'clean:src',
        'clean:build',
        'parallel:buildAssets',
        'newer:imagemin:main',
        'dojo:prod',
        'uglify:prod',
        'copy:packages',
        'processhtml:main'
    ]);
    grunt.registerTask('test', [
        'clean:src',
        'parallel:assets',
        'copy:src',
        'connect',
        'jasmine'
    ]);
    grunt.registerTask('travis', [
        'eslint',
        'test',
        'build-prod'
    ]);
};
