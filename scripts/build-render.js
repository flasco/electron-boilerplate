const parseArgs = require('minimist');
const ora = require('ora');
const webpack = require('webpack');
const config_prod = require('../config/webpack.prod');
const config_dev = require('../config/webpack.dev');
const { checkMainfest, dllComplier } = require('./util');

const argv = parseArgs(process.argv.splice(2), {
  boolean: ["re-dll"],
  boolean: ['dev']
});

async function start() {
  if (argv['re-dll'] || !await checkMainfest()) {
    const spinner_dll = ora('compiling dll...');
    await dllComplier();
    spinner_dll.succeed();
  }
  const spinner = ora('compiling app...');
  const config = argv['dev'] ? config_dev : config_prod;
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
