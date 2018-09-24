const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow

function createWindow() {
	mainWindow = new BrowserWindow({
	icon:'resources/app/icon.png',
	 webPreferences: {
    nodeIntegration: false,
    preload: './preload.js'
	}
	});
	mainWindow.setIco
	mainWindow.loadURL('https://beta.communiquons.org/');
	
	mainWindow.on('closed', () =>{
		mainWindow = null;
	});
}
app.on('window-all-closed', () =>{
	if(process.platform !== 'darwin'){
		app.quit();
	}
});

app.on('ready', createWindow);