const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const {app, Menu, Tray} = require('electron');

const Config = require("./Config");

let mainWindow;
let tray = null;
let page_finished_loading = false;

const menu = Menu.buildFromTemplate([{
		label : 'Close',
		click: () => {
			app.quit();
			console.log("Closed");
		}
}]);


console.log("Starting...");
app.on('ready', () => {

	//Create and show main window
	mainWindow = new BrowserWindow({
		icon:'icon.png',
		webPreferences: {
			nodeIntegration: false
		},
		//show: false
	});
	//mainWindow.maximize();

	//set the url which must be open
	mainWindow.loadURL(Config.access_url);


	mainWindow.on('closed', () =>{
		//To close the window
		mainWindow = null;
	});


	//Create tray
	tray = new Tray('./icon.png');
	tray.setToolTip('Comunic');
	tray.setContextMenu(menu);

	console.log("Started successfully");

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
	});

	mainWindow.webContents.on('did-finish-load', function() {
		page_finished_loading = true;
	});
});
