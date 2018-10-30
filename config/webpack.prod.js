const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const Uglifyjs = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

module.exports = merge.smart(baseConfig, {
  mode: 'production',
  entry: ['./src/renderer/index.js'],
  plugins: [
    new CleanWebpackPlugin(['dist/css/*.*', 'dist/js/*.*'], {
      root: path.resolve(__dirname, '../')
    })
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/bundle.js',
    publicPath: '../dist/'
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new Uglifyjs({
        uglifyOptions: {
          compress: false
        }
      })
    ]
  }
});
