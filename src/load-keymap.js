const path = require('path');
const fs = require('fs');
const home = require('os').homedir();

function loadConfig(mainWindow){
    let configFile;
    fs.readFile(`${home}/config.json`, 'utf8',(err, data) => {
        if(err) throw err;
        configFile = JSON.parse(data);        
        mainWindow.webContents.send("config:load", configFile);  
        console.log("Data:",configFile['data']);
    });
}

module.exports = loadConfig;
