/**
 * Application main script
 * 
 * @author The Comunic Authors
 */

const {app} = require('electron');

const MainWindow = require("./MainWindow");

console.log("Starting...");
app.on('ready', () => {
	MainWindow.show();
});
