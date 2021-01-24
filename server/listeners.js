const Promise = require('bluebird');
const chalk = require('chalk');

const setUpListeners = (io, socket) =>
{
	Promise.promisifyAll(socket);

	var clients = io.sockets.sockets;

	console.log("new user connected!");

	clients.forEach((client) => console.log(client.id));

};

module.exports = setUpListeners;