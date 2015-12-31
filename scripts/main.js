'use strict';

$(document).ready(function() {
var Router =Backbone.Router.extend({
	routes: {
		'menu' : 'menu',
		'load' : 'load',
		'play' : 'play',
		'leaderboard' : 'leaderboard',
		'settings' : 'settings',
	},
	play : function(){
		$('#menu').hide();
		$('section').hide();
		$('#play').show();
		
	},
	leaderboard : function(){
		$('#menu').hide();
		$('section').hide();
		$('#leaderboard').show();
		
	},
	settings : function(){
		$('#menu').hide();
		$('section').hide();
		$('#settings').show();
		
	},
	load : function(){
		$('#leaderboard').hide();
		$('#play').hide();
		$('#settings').hide();
		$('#menu').hide();
		$('section').hide();
		$('#load').show();
	},
	menu : function (){
		$('section').hide();
		$('#menu').show();
		$('#settings').show();
		$('#play').show();
		$('#leaderboard').show();

	}
	
});
	

var r = new Router();
Backbone.history.start();

window.onload =function(){
		r.navigate('load', {trigger: true});
	window.setTimeout(function(){
		r.navigate('menu', {trigger:true})
	}, 4000);

}
});




