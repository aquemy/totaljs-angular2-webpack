var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

console.log(helpers.root('public'));

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('public'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
     },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
});
