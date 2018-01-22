import "./stylesheets/main.css";
// Small helpers you might want to keep
import "./helpers/external_links.js";
import './awesomplete';
import './stylesheets/awesomplete.css';

import { ipcRenderer } from "electron";

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};

ipcRenderer.on('test', (event, text) => { console.log("Received test message:", text)});
console.log(ipcRenderer);

// ipcRenderer.on('config:load', (event,config)=>{
//   console.log("Received Event: ", config );
//   let entries = config['data'];
//   debugger

//     new Awesomplete(input, {      
//       list:["Test1","Java","Javascript","Alder"]
//     });
// })
// new Awesomplete(input, {
//   list:["Test1","Java","Javascript","Alder"]
// });
