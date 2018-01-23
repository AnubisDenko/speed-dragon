# App Launcher

A small tool that is based on [Electron](http://electron.atom.io). When pressed Option+R on Mac or Super+R on Windows a small input box will be opened up. Once shorcut is typed the application will be started with the configured parameters.

Configuration file needs to be in User Home Directory and named `config.json`

# Quick start

Make sure you have [Node.js](https://nodejs.org) installed, then type the following commands known to every Node developer...
```
git clone https://github.com/AnubisDenko/speed-dragon
cd speed-dragon
yarn install
yarn start
```
Once you press the start key the app will be brought into the foreground.

# Compile the app
To convert the app into an executable package for your platform simply run

```
yarn release
```

# Sample config file
The config file needs to be located in the home directory and named **config.json**

```
{ "data": [
  {
    "shortcut": "ie-private",
    "location": "c:\Program Files\Internet Explorer\iexplore.exe",
    "params": "-private"

  }
]}
```

# Disclaimer
This app is a quick hack and playground for an Electron app. Its not tested at all so you'll never know if it works or not. 
Definitely not how you should implement an app but hey.... only got that much time to play around with stuff.
