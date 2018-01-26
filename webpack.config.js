/**
 * Webpack Config
 */
var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: {
        project: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-2']
            }
        }]
    }
};
