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

	/**
	 * Execute javascript quickly
	 */
	let js = function(code) {window.webContents.executeJavaScript(code)};


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


		//Shorcuts menu
		{
			label: "Shorcuts",
			submenu: [


				//Latest posts
				{
					label: "Latest posts",
					click: () => {
						js("openPage('latest');");
					}
				},

				//User page
				{
					label: "Your page",
					click: () => {
						js("openPage('user/' + userID());");
					}
				},

				//Conversations
				{
					label: "Conversations",
					click: () => {
						js("openPage('conversations');");
					}
				},

				//Groups
				{
					label: "Groups",
					click: () => {
						js("openPage('groups');");
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
						js("ComunicWeb.components.darkTheme.setEnabled(!ComunicWeb.components.darkTheme.isEnabled());");
					}
				},


				//Incognito mode
				{
					label: "Enable incognito mode",
					sublabel: "F6",
					click: () => {
						js("ComunicWeb.components.incognito.ui.confirmEnable();");
					}
				},


				//Account settings
				{
					label: "Account settings",
					click: () => {
						js("openPage('settings');");
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