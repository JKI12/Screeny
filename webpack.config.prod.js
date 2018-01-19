const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "bundle.css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'client', 'index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist', 'client'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.s?css$/,
        loader: extractSass.extract({
          use: [{
              loader: "css-loader"
            }, {
              loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new UglifyJsPlugin({
      test: /\.jsx?$/
    }),
    extractSass,
    new SimpleProgressPlugin()
  ]
}