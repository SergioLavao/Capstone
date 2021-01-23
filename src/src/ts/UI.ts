import * as $ from 'jquery';

import { Game } from './game';

export class UI
{

	public game : Game;

	constructor(game: Game)
	{
		this.game = game;

		$(document.body).append(`
			<div id="ui-container">
			<div id="topInfo"></div>
			<div id="gameDebug"></div>
			</div>`);
	}

	public initScreen(): void
	{
		let scope = this;

		let content = 
		`<div id="initScreen" class="panel panelCenter">
			<h3>Login</h3>
			<form id="loginForm">
				<input name="username" placeholder="Username" type="text">
				<input name="password" placeholder="Password" type="password">
	   			<input id="login" type="submit" value="Login">
			  <div class="row">
			    <div class="col">
			      First, but unordered
			    </div>
			    <div class="col order-12">
			      Second, but last
			    </div>
			    <div class="col order-1">
			      Third, but first
			    </div>
			  </div>			
			</form>
		</div>`;

		$('#ui-container').append(content);			

		$( "form" ).submit(function (e) {

			e.preventDefault();

			let data = new FormData(document.getElementById('loginForm') as HTMLFormElement);

			scope.game.api.post('API/Login', data, ()=> scope.game.initGame(),() => scope.appedTopInfo('Invalid username or password') );

		});

	}

	public appedTopInfo( msg : string , msTime : number = 2000):void
	{
		let id = '#topInfo';

		$(id).html(msg);			

		$(id).animate({opacity: 1}, 500);
		$(id).delay(500).animate({opacity: 1}, msTime);
		$(id).delay(msTime).animate({opacity: 0}, 500);

	}

	public gameUI(): void
	{
		$("#initScreen").remove();
	}

}