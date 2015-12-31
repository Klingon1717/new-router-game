'use strict';

$(document).ready(function() {
var Router =Backbone.Router.extend({
	routes: {
		'load' : 'load',
		'menu' : 'menu',
		'play' : 'play',
		'leaderboard' : 'leaderboard',
		'settings' : 'settings',
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
		
	},
	load : function(){
		$('section').hide();
		$('#load').show();
	},
	menu : function (){
		$('section').hide();
		$('#menu').show();
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




