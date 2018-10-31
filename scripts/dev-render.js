const parseArgs = require('minimist');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const ora = require('ora');
const path = require('path');
const config = require('../config/webpack.dev');

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
  let compiler = webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
      // 构建过程出错
      spinner.fail();
      console.log(err);
      process.exit(1);
    }
    spinner.succeed();
  });
  let server = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    historyApiFallback: false,
    compress: true,
    staticOptions: {},
    quiet: false,
    noInfo: false,
    lazy: true,
    filename: 'bundle.js',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    publicPath: '/',
    headers: { 'X-Custom-Header': 'yes' },
    stats: {
      colors: true,
      modules: false,
      children: false,
      entrypoints: false,
     },
  });

  await server.listen(8207, '127.0.0.1', (e) => {
    e != null && console.log(e);
  });
}

start();
