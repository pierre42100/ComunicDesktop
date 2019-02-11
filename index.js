/**
 * Application main script
 * 
 * @author The Comunic Authors
 */

const {app} = require('electron');

const MainWindow = require("./modules/MainWindow");

console.log("Starting...");
app.on('ready', () => {
	MainWindow.show();
});
