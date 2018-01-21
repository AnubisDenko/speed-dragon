import "./stylesheets/main.css";
// Small helpers you might want to keep
import "./helpers/context_menu.js";
import "./helpers/external_links.js";
import './awesomplete';
import './stylesheets/awesomplete.css';

// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

import { remote } from "electron";
import jetpack from "fs-jetpack";
import env from "env";

const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// files from disk like it's node.js! Welcome to Electron world :)
const manifest = appDir.read("package.json", "json");

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};

var input = document.getElementById('appName');
new Awesomplete(input, {
  list:["Test1","Java","Javascript","Alder"]
});
