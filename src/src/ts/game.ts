import * as $ from 'jquery';

import '../css/main.css';

import { Character } from "./character/Character";
import { Engine } from './engine/Engine';
import { Client } from "./server/Client";
import { API } from './API';
import { UI } from './UI';

export class Game
{
	public csrftoken: string;

	public engine: Engine;
	public ui: UI;
	public api: API;

	public client: Client;

	public keyFunctions: any = {
		chat : "KeyT",
		cancel : "Escape",
		confirm : "Enter"
	};

	constructor()
	{

		let scope = this;

		this.engine = new Engine();
		this.api = new API();
		
		this.ui = new UI( this );

		this.client = new Client(( emitter )=>{ scope.engine.character = new Character( scope.engine , emitter ) } );

		this.api.get('API/LoginState',( data )=>
		{

			data.logged ? this.initGame() : this.ui.initScreen();

		});

	}

	public initGame(): void
	{

		let scope = this;

		scope.ui.appedTopInfo('Welcome Back!');
		scope.ui.gameUI();	
		this.ketFunc();

	}

	public Login( data: any ): void
	{

		let scope = this;
		
		this.api.post('API/Login', data, ()=> scope.initGame(),() => scope.ui.appedTopInfo('Invalid username or password') );

	}

	public ketFunc(): void
	{

		let g = this;

		g.engine.inputHandler.regKeyFunc( g.keyFunctions.cancel ,() => { 
		
			g.ui.closeChatInput();

		});

		g.engine.inputHandler.regKeyFunc( g.keyFunctions.chat ,() => { 
		
			g.ui.openChatInput();

		});

	}

}

const game = new Game();