const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },

    devtool: '#inline-source-map',

    devServer: {
        historyApiFallback: true
    }

};

module.exports = webpackMerge.smart(commonConfig, devConfig);
