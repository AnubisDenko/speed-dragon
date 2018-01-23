const electron = require('electron');
const {Tray} = electron;

class MyTray extends Tray{
    constructor(iconPath, mainWindow){
        super(iconPath);
        this.mainWindow = mainWindow;
        this.on('click', this.onClick.bind(this));
        this.setToolTip('App Launcher');
      }

      onClick(event){
        if(this.mainWindow.isVisible()){
          this.mainWindow.hide();
        } else{
          this.mainWindow.show();
        }
      }
  }

  module.exports = MyTray;
  let isWindows = () => { return process.platform === 'win32'};
