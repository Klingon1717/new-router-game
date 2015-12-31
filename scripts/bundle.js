(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
	var Router = Backbone.Router.extend({
		routes: {
			'menu': 'menu',
			'load': 'load',
			'play': 'play',
			'leaderboard': 'leaderboard',
			'settings': 'settings'
		},
		play: function play() {
			$('#menu').hide();
			$('section').hide();
			$('#play').show();
		},
		leaderboard: function leaderboard() {
			$('#menu').hide();
			$('section').hide();
			$('#leaderboard').show();
		},
		settings: function settings() {
			$('#menu').hide();
			$('section').hide();
			$('#settings').show();
		},
		load: function load() {
			$('#leaderboard').hide();
			$('#play').hide();
			$('#settings').hide();
			$('#menu').hide();
			$('section').hide();
			$('#load').show();
		},
		menu: function menu() {
			$('section').hide();
			$('#menu').show();
			$('#settings').show();
			$('#play').show();
			$('#leaderboard').show();
		}

	});

	var r = new Router();
	Backbone.history.start();

	window.onload = function () {
		r.navigate('load', { trigger: true });
		window.setTimeout(function () {
			r.navigate('menu', { trigger: true });
		}, 4000);
	};
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map