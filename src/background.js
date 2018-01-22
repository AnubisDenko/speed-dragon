import path from "path";
import url from "url";
import { app, Menu, BrowserWindow, globalShortcut,ipcMain } from "electron";
import loadConfig from './load-keymap';

var mainWindow;
// Window setup
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

  const ret = globalShortcut.register(getKeyboardShortCut(), () => {
    mainWindow.isVisible ? mainWindow.hide() :  mainWindow.show();
  })

  if(isDev()){
    mainWindow.openDevTools();
    mainWindow.setIgnoreMouseEvents(false);
    console.log("======== DEV ==========");
    mainWindow.show();
    mainWindow.webContents.send('test','This is a test');
  }
  // const config = loadConfig(mainWindow);   
});

app.on('will-quit',() => {
  globalShortcut.unregisterAll();
})

let getKeyboardShortCut = () => {
  if(process.platform === 'darwin'){
    return 'Option+R';
  }else{
    return 'Super+R';
  }
}

let isDev = () => {
  return process.env.NODE_ENV !== 'production';
}