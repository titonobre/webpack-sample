const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { pathTo } = require('./helper');

const testConfig = {

    devtool: 'inline-source-map',

    resolve: {
        alias: {
            sinon: 'sinon/pkg/sinon'
        }
    },

    module: {
        noParse: [
            /node_modules\/sinon\//
        ],
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                include: pathTo('src'),
                exclude: [
                    /\.(e2e|spec)\.ts$/,
                    /node_modules/
                ],
                use: [
                    {
                        loader: 'istanbul-instrumenter-loader',
                        options: {
                            esModules: true
                        }
                    },
                    'source-map-loader'
                ]
            },
            {
                test: /^(.(?!.*\.js$))*$/,
                use: ['null-loader']
            }
        ]
    }
};

module.exports = webpackMerge.smart(commonConfig, testConfig);
