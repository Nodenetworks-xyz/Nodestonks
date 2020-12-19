const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');
const { electron } = require('process');
const url = require('url');
const { Component } = require('react')

// init win
let win;

const menutemplate = [
    {
        label: 'View',
        submenu: [
            { role: 'reload', accelerator: 'CmdOrCtrl+Y'},
            { role: 'togglefullscreen'},
        ]
    },
    {
        label: 'Info',
        submenu: [
            { 
            label: 'Learn More',
            click() { shell.openExternal('http://www.nodenetworks.xyz')}
            }
        ]
    }
] 

function createWindow(){
    // Create browser window
    win = new BrowserWindow({width:900, height:700, icon:__dirname+'/img/logo.jpg'});
    win.setMenu(null);
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', () => {
        win = null;
        process.exit()
    })
    const menu = Menu.buildFromTemplate(menutemplate)
    Menu.setApplicationMenu(menu)
}


// Run create window function
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit
    }
});

const RPC = require("discord-rpc");

const rpc = new RPC.Client({
  transport: "ipc",
})
rpc.on("ready", () => {
                  rpc.setActivity({
                    details: `Monitoring Crypto`,
                    state: `Beta`,
                    startTimestamp: new Date(),
                    largeImageKey: `stonks`,
                    largeImageText: `Nodestonks`,
                    smallImageKey: `smallimage`,
                    smallImageText: `By: Nodenetworks`,
                  });
})

                rpc.login({
                  clientId: `Clientid`,
                }).catch(console.error);
