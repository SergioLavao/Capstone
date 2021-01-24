export class Emitter
{

	public socket: any;

	constructor( socket: any )
	{

		this.socket = socket;

	}

	public newMessage( msg : string )
	{

		this.socket.emit("message", msg);

	}

}