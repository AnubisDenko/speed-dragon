import "./stylesheets/main.css";
// Small helpers you might want to keep
import './awesomplete';
import './stylesheets/awesomplete.css';

import { ipcRenderer } from "electron";

ipcRenderer.on('test', (event, text) => { console.log("Received test message:", text)});
console.log(ipcRenderer);

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};



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
``
