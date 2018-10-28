const { app, BrowserWindow } = require('electron');
const path = require('path');

// 启动ipcMain
require('./src/main/ipcListener');

let currentWin;

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

function createWindow() {
  currentWin = new BrowserWindow({
    width: 800,
    height: 600,
    icon: './static/app.ico'
  });
  currentWin.loadURL(`file://${path.resolve(__dirname, './static/index.html')}`);
  currentWin.on('closed', () => {
    currentWin = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (currentWin === null) {
    createWindow();
  }
});
