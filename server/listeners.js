const Promise = require('bluebird');
const chalk = require('chalk');

const setUpListeners = (io, socket) =>
{
	Promise.promisifyAll(socket);

	let clients = io.sockets.clients();

    socket.on('start_game', () =>
    {
		io.sockets.emit('add_player', [{ id: 123 }]);

		io.clients((error, clients) => {
		      if (error) throw error;
		      console.log(clients);
		});
    });
};

module.exports = setUpListeners;