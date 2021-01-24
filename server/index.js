const PORT = 9000;

const setUpListeners = require('./listeners');
const express = require('express');
const path = require('path');
const chalk = require('chalk');
const http = require('http');

// Create server and app
const server = http.createServer();
const app = express();
server.on('request', app);

// Sockets
const io = require('socket.io')(server,{
	 cors:true,
	 origins:["http://127.0.0.1:8000"],
});

// setUpSockets(io);
io.on('connection', socket =>{ setUpListeners(io, socket); });

server.listen(PORT, () =>
	console.log(chalk.italic.magenta(`Server listening on ${PORT}...`)));