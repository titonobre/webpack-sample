const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const VisualizerPlugin = require('webpack-visualizer-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const extractCSS = new ExtractTextPlugin('[name].[hash].css');

const prodConfig = {

    devtool: 'source-map',

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'eslint-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.less$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ]
                })
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },

    plugins: [
        extractCSS,
        new VisualizerPlugin({
            filename: '../reports/bundle-visualizer/index.html'
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: '../reports/bundle-analyzer/index.html',
            defaultSizes: 'parsed',
            generateStatsFile: true,
            openAnalyzer: false,
            statsFilename: '../reports/stats/stats.json'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    ]
};

module.exports = webpackMerge(commonConfig, prodConfig);
