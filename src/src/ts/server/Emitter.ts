export class Emitter
{

	public socket: any;

	constructor( socket: any )
	{

		this.socket = socket;

	}

	public newMessage( msg : string ): void
	{

		this.socket.emit("message", msg);

	}

	public updateClient( charData: any ): void
	{

		this.socket.emit( "update_client" , charData );

	}

}