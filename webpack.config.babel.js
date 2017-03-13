// eslint-disable-next-line
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: `${APP_DIR}/client/app.js`,
  output: {
    path: BUILD_DIR,
    filename: production ? '[name].[chunkhash].js' : '[name].[hash].js',
  },
  devtool: production ? false : 'sourcemap',
  devServer: {
    hot: true,
    inline: true,
    contentBase: BUILD_DIR,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            // options: { modules: 'true' },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', { modules: false }],
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new HtmlWebpackPlugin({
      title: 'modern modular javascript',
      filename: 'index.html',
      template: 'template.html',
    }),
  ],
};
