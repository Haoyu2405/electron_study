var electron = require('electron')

var app = electron.app // 引入app
var Browser = electron.BrowserWindow // 引入BrowserWindow

var mainWindow = null // 定义一个全局变量

app.on('ready', () => {
  mainWindow = new Browser({
    width: 800,
    height: 600
  })
  mainWindow.loadFile('index.html')
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
