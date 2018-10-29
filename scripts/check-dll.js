const path = require('path');
const ora = require('ora');
const { fileExists, processExec } = require('./util');
const { BUILD_DLL, BUILD_RENDER } = require('./shell');

async function start() {
  const filePath = path.resolve(__dirname, '../dist/vendor-manifest.json');

  try {
    const spinner = ora('check dll...\n').start();
    const flag = await fileExists(filePath);
    if (flag) {
      console.log('already exist...');
      spinner.succeed();
    } else {
      console.log('dll not exist...');
      spinner.succeed();
      const spinner2 = ora('dll building...').start();
      if (await processExec(BUILD_DLL)) {
        spinner2.succeed();
      } else {
        spinner2.fail();
      }
    }
  } catch (error) {
    console.log(error);
  }
}

start();
