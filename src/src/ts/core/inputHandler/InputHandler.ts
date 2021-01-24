import { HandlerFunction } from "./HandlerClasses";

export class InputHandler
{

	public inGame: boolean = false;

	public mouseX : number = 0;
	public mouseY : number = 0;

	public keyEvents: any = {};
	public keyFunctions: any = {}; 

	constructor()
	{

		let element = document.body;
		let handler = this;

		document.addEventListener("mousemove", (event) =>
		{

		    handler.mouseX =  event.movementX;
			handler.mouseY =  event.movementY;

			setTimeout(()=>
			{
				
			    handler.mouseX =  0;
				handler.mouseY =  0;

			}, 100);

	    });

		document.addEventListener( 'pointerlockchange', (event)=>
		{


            if ( document.pointerLockElement === element ) {

            	handler.inGame = true;

            } else {

            	handler.inGame = false;

            }

		}, false );

		document.addEventListener('keydown', (event) => {

			if (handler.keyEvents[event.code])
				return	handler.keyEvents[event.code].enabled = true;

			if (handler.keyFunctions[event.code])
				handler.keyFunctions[event.code].f();

		});

		document.addEventListener('keyup', (event) => {

			if (handler.keyEvents[event.code])
				return	handler.keyEvents[event.code].enabled = false;

		});

	}

	public regKeyFunc( keyCode:string , handlerFunction:any ): void
	{

		if( this.keyFunctions[keyCode] )
			return console.log(`Cannot register key function... ${keyCode} its already used!`)

		this.keyFunctions[keyCode] = new HandlerFunction( handlerFunction );

	}

}