const path = require('path');
const ora = require('ora');
const { fileExists, processExec } = require('./util');
const { BUILD_DLL, BUILD_RENDER } = require('./shell');

async function start() {
  const filePath = path.resolve(__dirname, '../dist/vendor-manifest.json');

  try {
    const flag = await fileExists(filePath);
    if (flag) {
      console.log('存在dll，不用打包。。');
      const spinner = ora('building...\n').start();
      if (await processExec(BUILD_RENDER)) {
        spinner.succeed();
      } else {
        spinner.fail();
      }
    } else {
      console.log('不存在dll');
      const spinner = ora('dll building...').start();
      if (await processExec(BUILD_DLL)) {
        spinner.succeed();
        const spinner2 = ora('building...').start();
        if (await processExec(BUILD_RENDER)) {
          spinner2.succeed();
        } else {
          spinner2.fail();
        }
      } else {
        spinner.fail();
      }
    }
  } catch (error) {
    console.log(error);
  }
}

start();
