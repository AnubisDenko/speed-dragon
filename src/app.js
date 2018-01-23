import "./stylesheets/main.css";
// Small helpers you might want to keep
import './awesomplete';
import './stylesheets/awesomplete.css';

import { ipcRenderer } from "electron";

ipcRenderer.on('test', (event, text) => { console.log("Received test message:", text)});
const RETURN_KEY = 13

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};

var input = document.getElementById('appName');
input.onkeyup = (event) => {
  if(event.keyCode == RETURN_KEY ) {
    console.log("Would be running the following command:", event);
    console.log("Command " + event.srcElement.value)
  }

};


let entries;
let keys;

ipcRenderer.on('config:load', (event,config)=>{
  keys = config.data.map(entry => entry.shortcut);

    entries = config.data.map( entry => [entry.shortcut,entry.location + " " + entry.params] );

    console.log("Keys: " + keys);
    console.log("Entries: " + entries);

    new Awesomplete(input, {
      list:entries
    });
});
