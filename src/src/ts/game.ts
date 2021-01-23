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

	public initGame()
	{
		this.ui.appedTopInfo('Welcome Back!');
		this.ui.gameUI();	

	}

}

const game = new Game();