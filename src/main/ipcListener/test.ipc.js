const { ipcMain } = require('electron');

class TestIpc {
  listenHandshake(e, data) {
    console.log('啊呀，触发了！');
    console.log(data);
  }

  init() {
    ipcMain.addListener('CQHACK:handshake', this.listenHandshake);
  }

  destory() {
    ipcMain.removeListener('CQHACK:handshake', this.listenHandshake);
  }
}

module.exports = TestIpc;
