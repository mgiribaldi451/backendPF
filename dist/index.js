"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var services_1 = __importDefault(require("./api/productos/services"));
var api_1 = __importDefault(require("./api"));
var http_1 = __importDefault(require("http"));
//import IOServer, {Server} from 'socket.io'
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
var port = normalizePort(process.env.PORT || '8080');
//app.set('port', process.env.PORT || 8080);
app.set('port', port);
app.listen(8080);
app.use("/api/", api_1["default"]);
//const bp = require('body-parser')
//const fs = require('fs')
//app.use(bp.json())
//app.use(bp.urlencoded({ extended: true }))
app.use(express_1["default"].static('public'));
var server = http_1["default"].createServer(http_1["default"]);
//const io = new socketio.Server(server)
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    var prodejs = services_1["default"].productos;
    res.render('index', { prodejs: prodejs });
});
server.listen(3001);
server.setTimeout(0);
server.on('error', function (error) { return console.log("Error en servidor ".concat(error)); });
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
