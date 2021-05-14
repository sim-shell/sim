const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		minWidth: 900,
		minHeight: 680
		//vibrancy: 'dark'  // 'light', 'medium-light' etc
	});

	const mode = process.env.NODE_ENV;
	const url =
		mode === 'production'
			? // in production, use the statically build version of our application
			  `file://${path.join(__dirname, '../build/index.html')}`
			: // in dev, target the host and port of the local rollup web server
			  `http://localhost:3000/`;
	mainWindow.loadURL(url);
	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

// those two events completely optional to subscrbe to, but that's a common way to get the
// user experience people expect to have on macOS: do not quit the application directly
// after the user close the last window, instead wait for Command + Q (or equivalent).
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
	if (mainWindow === null) createWindow();
});
