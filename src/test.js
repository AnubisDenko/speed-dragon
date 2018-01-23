const path = require('path');
const fs = require('fs');
const home = require('os').homedir();


let configFile;
fs.readFile(`${home}/config.json`, 'utf8',(err, file) => {
  if(err) throw err;
  console.log(file);
  configFile = JSON.parse(file);

  console.log(configFile.data.map( entry => [entry.shortcut, entry.location + " " + entry.params]));
});
