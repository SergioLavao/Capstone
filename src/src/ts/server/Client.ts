import { io } from "socket.io-client";

export class Client
{

	public io: any;

	constructor()
	{
		
		this.io = io("http://127.0.0.1:9000");

		this.io.on('connection', (socket) => {

			console.log("connected successfully", socket.id);

		});
	
	}

}