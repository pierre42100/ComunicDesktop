/**
 * Tray menu
 * 
 * @author Comunic Authors
 */
const {app, Menu} = require('electron');

module.exports = Menu.buildFromTemplate([{
	label : 'Close',
	click: () => {
		app.quit();
		console.log("Closed");
	}
}]);