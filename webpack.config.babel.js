var webpack = require('webpack');
var path = require('path');
var production = process.env.NODE_ENV === 'production';

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

export default {
  entry: APP_DIR + '/client/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'client-bundle.js',
  },
  devtool: production ? false : 'sourcemap',
  devServer: {
    hot: true,
    inline: true,
    contentBase: BUILD_DIR,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
