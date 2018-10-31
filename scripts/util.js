const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const dllConfig = require('../config/webpack.dll');
/**
 * @param {string} path asd
 */
function fileExists(path) {
  return new Promise((resolve) => {
    fs.exists(path, (existFlag) => {
      resolve(existFlag);
    });
  });
}

exports.checkMainfest = () => {
  const filePath = path.resolve(__dirname, '../dist/vendor-manifest.json');
  return fileExists(filePath);
};

exports.dllComplier = () => {
  return new Promise((resolve) => {
    webpack(dllConfig, (err, stats) => {
      if (err || stats.hasErrors()) {
        console.error(err);
        process.exit(1);
      }
      // 成功执行完构建
      resolve(true);
    });
  });
};
