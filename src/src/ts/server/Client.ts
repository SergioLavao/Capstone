import { io } from "socket.io-client";
import { Emitter } from "./Emitter";

export class Client
{

	public socket: any;
	public emitter: Emitter;

	constructor()
	{
		let scope = this;
		
		this.socket = io("http://127.0.0.1:9000");

		this.socket.on('connect', () => {

			let socket = this.socket

			console.log("connected successfully", socket.id );

			scope.emitter = new Emitter( socket );

		});
	
	}

}