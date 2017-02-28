'use strict';
var path = require('path');
var webpack = require('webpack');
var fs = require("fs");
var BUILD = process.env.ENV_TYPE === 'production';
module.exports = {
  devtool: BUILD ? 'source-map' : "eval",
  resolve: {
      extensions: ['.js', '.jsx', '.css']
  },
  entry: {
    bundle: ['babel-polyfill', "./src/index.jsx", "./src/main.css", "./src/index.html"],
  },
  output: {
    path: __dirname + "/static",
    filename: '[name].js',
  },
  plugins: BUILD ? [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
    // Only emit files when there are no errors
    
    new webpack.NoEmitOnErrorsPlugin(),
    // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    // Minify all javascript, switch loaders to minimizing mode
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ] : [],
  module: {
    loaders: [{
        // JS LOADER
        // Reference: https://github.com/babel/babel-loader
        // Transpile .js files using babel-loader
        // Compiles ES6 and ES7 into ES5 code
        test: /\.jsx?$/i,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      { test: /\.html$/, loader: "file-loader?name=[name].[ext]" },
      { test: /\.css$/, loader: "file-loader?name=[name].[ext]" }]
  }
};