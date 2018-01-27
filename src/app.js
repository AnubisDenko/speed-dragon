import "./stylesheets/main.css";
import './awesomplete';
import './stylesheets/awesomplete.css';
import Channels from './channels';
import { ipcRenderer } from "electron";

const RETURN_KEY = 13;

const input = document.getElementById('appName');

document.addEventListener("visibilitychange", () => {
  input.focus();
});

input.onkeyup = (event) => {
  if(event.keyCode === RETURN_KEY ) {
    ipcRenderer.send(Channels.COMMAND_RUN, event.srcElement.value);
    input.value = '';
  }
};

let entries;
let keys;

ipcRenderer.on('config:load', (event,config)=>{
  keys = config.data.map(entry => entry.shortcut);

    entries = config.data.map( entry => [entry.shortcut, entry.location + " " + entry.params]);

    console.log(entries);

    const inputBox = new Awesomplete(input, {
      list:entries
    });
    inputBox.autoFirst = true;

});
