const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');

module.exports = {
  ...baseConfig,
  entry: [
    'webpack-dev-server/client?http://localhost:8207',
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8207/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    host: 'localhost',
    compress: true,
    port: 8207,
    historyApiFallback: true,
    overlay: true,
    hot: true
  },
};
