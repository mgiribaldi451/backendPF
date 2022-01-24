import axios from "axios"
import express, { Express } from "express";
//import {IOServer:Server} from 'socket.io'
import * as socketio from "socket.io";
import prodA from "./api/productos/services"
import api from "./api";
import http, { Server } from 'http'
import Productos from "interfaces/productos";
//import IOServer, {Server} from 'socket.io'
const app: Express = express();
app.use(express.json());
app.set('port', process.env.PORT || 8080);
app.listen(8080);
app.use("/api/", api);
//const bp = require('body-parser')
//const fs = require('fs')
//app.use(bp.json())
//app.use(bp.urlencoded({ extended: true }))
app.use(express.static('public'));

const server: Server = http.createServer(http)
//const io = new socketio.Server(server)
app.set('view engine', 'ejs');

 
app.get('/', (req, res) => {
    let prodejs =prodA.productos
    res.render('index' , {prodejs} )
})

server.listen(3001)
server.setTimeout(0)


server.on('error', error => console.log(`Error en servidor ${error}`))

