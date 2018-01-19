const { spawn } = require('child_process');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "bundle.css",
  disable: process.env.NODE_ENV === "development"
});

const config = {
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src', 'client', 'index.js')
  ],
  output: {
    path: path.join(__dirname, 'client', 'dist'),
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
        loaders: ["react-hot-loader/webpack", "babel-loader"]
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
      'process.env.NODE_ENV': '"development"',
      'process.env.API_URL': '"http://localhost:3000/"'
    }),
    extractSass
  ]
};

module.exports = config;