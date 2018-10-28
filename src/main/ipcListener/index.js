const { ipcMain } = require('electron');
const TestIpc = require('./test.ipc');

const runner = new TestIpc();

ipcMain.on('CQHACK:ipc-init', () => {
  console.log('开启！');
  runner.init();
});

ipcMain.on('CQHACK:ipc-close', () => {
  console.log('关闭！');
  runner.destory();
});
