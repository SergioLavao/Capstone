const Promise = require('bluebird');
const chalk = require('chalk');

const setUpListeners = (io, socket) =>
{
	Promise.promisifyAll(socket);

	socket.on('message', ( data ) => { 

		console.log(socket.id, data); 

	});

	socket.on("update_client", ( data )=>
	{
		console.log( data )
	});

};

module.exports = setUpListeners;