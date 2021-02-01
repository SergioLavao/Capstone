import { io } from "socket.io-client";
import { Emitter } from "./Emitter";

export class Client
{

	public socket: any;
	public emitter: Emitter;

	public char_data: any;

	constructor( onConnectFunc?: ( emitter:any )=> void)
	{
		let scope = this;
		this.char_data =
		{

			pos:
			{
				x:0,
				y:0,
				z:0
			}

		};

		this.socket = io("http://127.0.0.1:9000");

		this.socket.on('connect', () => 
		{

			let socket = this.socket

			scope.emitter = new Emitter( socket );			

			onConnectFunc( scope.emitter );

		});

	}

}