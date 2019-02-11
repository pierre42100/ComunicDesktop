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

		//File menu
		{
			label: "File",
			submenu: [

				//Close app
				{
					label: "Quit",
					click: () => {
						app.quit();
					}
				}

			]
		},


		//Settings menu
		{
			label: "Settings",
			submenu: [

				//Dark mode
				{
					label: "Toggle dark mode",
					click: () => {
						window.webContents.executeJavaScript("ComunicWeb.components.darkTheme.setEnabled(!ComunicWeb.components.darkTheme.isEnabled());");
					}
				},


				//Incognito mode
				{
					label: "Enable incognito mode",
					sublabel: "F6",
					click: () => {
						window.webContents.executeJavaScript("ComunicWeb.components.incognito.ui.confirmEnable();");
					}
				}
			]
		},


		//Advanced menu
		{
			label: "Advanced",
			submenu: [

				//Dev tools
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