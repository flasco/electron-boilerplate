const fs = require('fs');
const process = require('child_process');

/**
 * @param {string} scripts asd
 */
exports.processExec = (scripts) => {
  return new Promise((resolve) => {
    process.exec(scripts, (err) => {
      resolve(!err);
    });
  });
};

/**
 * @param {string} path asd
 */
exports.fileExists = (path) => {
  return new Promise((resolve) => {
    fs.exists(path, (existFlag) => {
      resolve(existFlag);
    });
  });
};
