const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');

const PATHS = {
  app: path.join(__dirname, 'app', 'index.jsx'),
  site: path.join(__dirname, 'site'),
  style: path.join(__dirname, 'app', 'assets', 'main.css'),
};

var css = require("./app/assets/main.scss")

const common = {
  entry: {
    app: PATHS.app
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.site,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'samandbridgette.com'
    })
  ]
};

module.exports = validate(common);
