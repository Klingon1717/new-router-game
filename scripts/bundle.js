(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
	var Router = Backbone.Router.extend({
		routes: {
			'play': 'goPlay',
			'leaderBoard': 'myLeaderboard',
			'settings': 'mySettings'
		},
		goPlay: function goPlay() {
			$('section').hide();
			$('#playScreen').show();
			$('nav').show();
		},
		goLeaderboard: function goLeaderboard() {
			$('section').hide();
			$('#leaderboardScreen').show();
			$('nav').show();
		},
		goSettings: function goSettings() {
			$('section').hide();
			$('#settingsScreen').show();
			$('nav').show();
		}

	});
	$('section').hide();
	$('nav').hide();
	$('#loading').show();
	setTimeout(function () {
		$('nav').show();
		r.navigate('play', { trigger: true });
	}, 4000);

	var r = new Router();
	Backbone.history.start();
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map