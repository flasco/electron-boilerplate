const path = require('path');
const baseConfig = require('./webpack.base');

module.exports = {
  ...baseConfig,
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
};
