'use strict';

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
	$('#loading').show();
		setTimeout(function(){
			$('nav').show();
			r.navigate('play', { trigger: true });
			}, 4000);

var r = new Router();
Backbone.history.start();

});

