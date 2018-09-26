const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const {app, Menu, Tray} = require('electron')

let mainWindow
let tray = null

function main(){
	mainWindow = new BrowserWindow({
		icon:'icon.png',
		webPreferences :{
			nodeIntegration :false
		},
		show: false
	});
	mainWindow.maximize();
	//createWindow --> create the window
	mainWindow.loadURL('https://comunic.io');
	//set the url who must be open

	mainWindow.on('closed', () =>{
		mainWindow = null;
	});
	//To close the window

	tray = new Tray('./icon.png');

	tray.setToolTip('Comunic');

		
	tray.setContextMenu(menu_1);
	
	console.log("Started succesfully");
	
	mainWindow.once('ready-to-show', () => {
		mainWindow.show()
	})
};
const menu_1 = Menu.buildFromTemplate([{
		label: "Ouvrir la version stable",
		click: () => {
			mainWindow.loadURL('https://communiquons.org');
			tray.setContextMenu(menu_2)		
		}
	},
	{
		label : 'Quit',
		click: () => {
			app.quit();
			console.log("Closed");
		}
}]);
const menu_2 = Menu.buildFromTemplate([{
		label: "Ouvrir la nouvelle version",
		click: () =>{
			mainWindow.loadURL('https://comunic.io');
			tray.setContextMenu(menu_1)
		}
	},
	{
		label:'Quit',
		click: () => {
			app.quit();
			console.log("Closed");
		}
}]);

console.log("Starting...");
app.on('ready', main);
