export class InputHandler
{

	public inGame: boolean = false;

	public mouseX : number = 0;
	public mouseY : number = 0;

	public keyEvents: any[] = [];

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

			handler.keyEvents[event.code] = true;

		});

		document.addEventListener('keyup', (event) => {

			delete handler.keyEvents[event.code];

		});

	}
}