const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: {
        'vendor': './src/vendor.js',
        'main': './src/main.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-2']
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    'awesome-typescript-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'ngtemplate-loader',
                        options: {
                            relativeTo: 'src/'
                        }
                    },
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: 'use:xlink:href'
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    plugins: [
        new CheckerPlugin(),

        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),

        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            minify: {
                collapseWhitespace: true
            }
        })
    ]
};
