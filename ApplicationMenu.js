/**
 * Application menu
 * 
 * @author Comunic Authors
 */

const {app, Menu} = require('electron');

/**
 * Get application menu
 * 
 * @param {BrowserWindow} window
 * @return {Menu} Application menu
 */
module.exports.Get = function(window){

	return Menu.buildFromTemplate([
		{
			label: "File",
			submenu: [
				{
					label: "Quit",
					click: () => {
						app.quit();
					}
				}
			]
		},

		{
			label: "Advanced",
			submenu: [
				{
					label: "Toggle developer tools",
					click: () => {
						window.webContents.toggleDevTools();
					}
				}
			]
		}
	])

}