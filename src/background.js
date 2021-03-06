import path from "path";
import url from "url";
import { app, BrowserWindow, globalShortcut,ipcMain } from "electron";
import loadConfig from './load-keymap';
import MyTray from './tray';

import Constants from './channels';

const child = require('child_process').execFile;
var mainWindow;
var trayIcon;
const ESCAPE = 'Escape';

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 300,
    frame: false,
    resizable: false,
    transparent: true,
  });

  mainWindow.setIgnoreMouseEvents(true);
  mainWindow.hide();

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "app.html"),
      protocol: "file:",
      slashes: true
    })
  );

  globalShortcut.register(getOpenInputBoxShortcut(), () => {
    mainWindow.show();
  });

  globalShortcut.register(ESCAPE, () => {
    mainWindow.hide();
  });

  ipcMain.on(Constants.COMMAND_RUN, (event, command) => {
    mainWindow.hide();
    runCommand(command);
  });

  mainWindow.webContents.on('did-finish-load', () => {
    loadConfig(mainWindow)
  });

  if(isDev()){
    mainWindow.openDevTools();
    mainWindow.setIgnoreMouseEvents(false);
    console.log("======== DEV ==========");
    mainWindow.show();
  }

  const iconName = 'dragon-16x16.png';
  const iconPath = path.join(__dirname,`../resources/icons/${iconName}`);
  trayIcon = new MyTray(iconPath, mainWindow);

  app.dock.hide()
});

app.on('will-quit',() => {
  globalShortcut.unregisterAll();
});

let getOpenInputBoxShortcut = () => {
  if(process.platform === 'darwin'){
    return 'Option+R';
  }else{
    return 'Super+R';
  }
};

let isDev = () => {
  return process.env.NODE_ENV !== 'production';
};

let runCommand = (commandPath) => {
  child(commandPath, (err,data) => {
    if(err){
      console.error(err);
      return;
    }

    console.log(data.toString());
  })
};
