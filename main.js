const { app, BrowserWindow } = require('electron');

let currentWin;

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

function createWindow() {
  currentWin = new BrowserWindow({
    width: 800,
    height: 600,
    icon: './static/app.ico'
  });
  currentWin.loadURL(`file://${__dirname}/index.html`);
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
