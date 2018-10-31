const parseArgs = require('minimist');
const ora = require('ora');
const webpack = require('webpack');
const config = require('../config/webpack.prod');
const { checkMainfest, dllComplier } = require('./util');

const argv = parseArgs(process.argv.splice(2), {
  boolean: ["re-dll"]
});

async function start() {
  if (argv['re-dll'] || !await checkMainfest()) {
    const spinner_dll = ora('compiling dll...');
    await dllComplier();
    spinner_dll.succeed();
  }
  const spinner = ora('compiling app...');
  webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
      // 构建过程出错
      spinner.fail();
      console.log(err);
      process.exit(1);
    }
    spinner.succeed();
  });
}

start();
