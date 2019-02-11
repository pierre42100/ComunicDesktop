/**
 * Main Window script
 * 
 * @author The Comunic authors
 */

const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const {Menu, Tray} = require('electron');
const Config = require("../Config");
const TrayMenu = require("./TrayMenu");
const ApplicationMenu = require("./ApplicationMenu");
const fs = require("fs");


let mainWindow;
let tray = null;
let page_finished_loading = false;


/**
 * Show main window
 */
exports.show = function(){

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
	tray.setContextMenu(TrayMenu);

	console.log("Started successfully");

	//Set application menu
	Menu.setApplicationMenu(ApplicationMenu.Get(mainWindow));

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
	});

	mainWindow.webContents.on('did-finish-load', function() {
		page_finished_loading = true;

		//Inject CSS
		fs.readFile("./app.css", (err, data) => {
			
			//Check for errors
			if(err){
				console.error("Error while loading ./app.css: " + err);
				return;
			}

			let style = data.toString();
			mainWindow.webContents.executeJavaScript("let style = document.createElement('style');" +
				"style.innerHTML = decodeURIComponent(\""+encodeURIComponent(style)+"\");" +
				"document.head.appendChild(style);");
			
		});
	});
}