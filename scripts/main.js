'use strict';
var Backbone = require('backbone');
var $ = require('jquery');

$(document).ready(function() {
var Router =Backbone.Router.extend({
	routes: {
		'play' : 'goPlay',
		'leaderBoard' : 'myLeaderboard',
		'settings' : 'mySettings',
	},
	goPlay : function(){
		$('section').hide();
		$('#playScreen').show();
		$('nav').show();
	},
	goLeaderboard : function(){
		$('section').hide();
		$('#leaderboardScreen').show();
		$('nav').show();
	},
	goSettings : function(){
		$('section').hide();
		$('#settingsScreen').show();
		$('nav').show();
	}
	
});
	$('section').hide();
	$('nav').hide();

var r = new Router();
Backbone.history.start();

window.onload = function(){
	game.navigate('load', {trigger : true});
	window.setTimeout(function(){
		game.navigate('menu', {trigger : true})
	}, 3000);

}