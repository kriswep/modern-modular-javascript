// eslint-disable-next-line
const webpack = require('webpack');
const path = require('path');

const production = process.env.NODE_ENV === 'production';
const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: `${APP_DIR}/client/app.js`,
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
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: 'true' },
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
      //options.devtool && (options.devtool.indexOf('sourcemap') >= 0 || options.devtool.indexOf('source-map') >= 0),
    }),
  ],
};
