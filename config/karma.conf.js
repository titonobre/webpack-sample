const { root } = require('./helper');
const webpackConfig = require('./webpack.test');

webpackConfig.entry = null;
webpackConfig.plugins = [];

module.exports = function (config) {
    config.set({
        basePath: root,
        frameworks: ['mocha', 'chai', 'sinon'],
        files: [
            // 'src/vendor.js',
            'test/entry.js'
        ],
        exclude: [],
        preprocessors: {
            'test/entry.js': ['webpack', 'sourcemap']
        },

        // webpack stuff
        webpack: webpackConfig,
        webpackServer: {
            // noInfo: true
        },
        webpackMiddleware: {
            stats: {
                chunkModules: false,
                colors: true
            }
        },

        reporters: ['mocha', 'coverage'],
        coverageReporter: {
            dir: 'reports/coverage/',
            reporters: [
                { type: 'json-summary' },
                { type: 'text' },
                { type: 'html' }
            ]
        },
        mochaReporter: {
            showDiff: true
        },
        port: 9876,
        colors: true,
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity
    });
};
