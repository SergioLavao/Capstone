export class HandlerEvent
{

	public enabled: boolean = false;

}

export class HandlerFunction
{

	public f: any;

	constructor( func : any )
	{
		this.f = func;
	}

}