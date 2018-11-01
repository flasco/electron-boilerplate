const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Uglifyjs = require('uglifyjs-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

module.exports = merge.smart(baseConfig, {
  mode: 'production',
  entry: ['./src/renderer/main.js'],
  plugins: [
    new CleanWebpackPlugin(['dist/css/*.*', 'dist/js/*.*'], {
      verbose: false,
      root: path.resolve(__dirname, '../')
    }),
    new MiniCssExtractPlugin({
      filename: '/css/[name].css'
    })
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
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
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
