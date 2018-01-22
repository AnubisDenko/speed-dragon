# Speed Dragon

A small tool that is based on [Electron runtime](http://electron.atom.io). When pressed Option+R on Mac or Super+R on Windows a small input box will be opened up. Once shorcut is typed the application will be started with the configured parameters.

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