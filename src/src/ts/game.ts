import * as $ from 'jquery';

import '../css/main.css';
import { Engine } from './engine/Engine';
import { API } from './API';
import { UI } from './UI';

export class Game
{
	public csrftoken: string;

	public engine: Engine;
	public ui: UI;
	public api: API;

	constructor()
	{

		this.engine = new Engine();
		this.api = new API();
		
		this.ui = new UI( this );

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
		this.initKeysHandler();

	}

	public Login( data: any ): void
	{

		let scope = this;
		this.api.post('API/Login', data, ()=> scope.initGame(),() => scope.ui.appedTopInfo('Invalid username or password') );

	}

	public initKeysHandler(): void
	{
		let g = this;

		g.engine.inputHandler.regKeyFunc( "KeyT" ,() => { 
		
			g.ui.openChatInput();

		});

		g.engine.inputHandler.regKeyFunc( "Escape" ,() => { 
		
			g.ui.closeChatInput();

		});

	}

}

const game = new Game();