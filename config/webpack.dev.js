const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge.smart(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8207',
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/renderer/main.js',
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: [
              [
                require.resolve('babel-plugin-zent'),
                {
                  automaticStyleImport: true
                }
              ],
              'react-hot-loader/babel'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/bundle.js',
    publicPath: 'http://localhost:8207/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    host: '127.0.0.1',
    compress: true,
    port: 8207,
    historyApiFallback: true,
    overlay: true,
    hot: true
  },
});
