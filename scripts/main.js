'use strict';
var Router =Backbone.Router.extend({
	routes: {
		'load' : 'load',
		'menu' : 'menu',
		'play' : 'play',
		'leaderboard' : 'leaderboard',
		'settings' : 'settings'
	},
	load : function(){
		$('section').hide();
		$('#load').show();
	},
	menu : function(){
		$('section').hide();
		$('#menu').show();
	},
	play : function(){
		$('section').hide();
		$('#play').show();
	},
	leaderboard : function(){
		$('section').hide();
		$('#leaderboard').show();
	},
	settings : function(){
		$('section').hide();
		$('#settings').show();
	}
	
});

var game = new Router();
Backbone.history.start();

window.onload = function(){
	game.navigate('load', {trigger : true});
	window.setTimeout(function(){
		game.navigate('menu', {trigger : true})
	}, 3000);

}