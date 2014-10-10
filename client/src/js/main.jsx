/** @jsx React.DOM */

var React = require('react');
var UI = require('./react/ui.jsx');

React.renderComponent(
  <UI />,
  document.getElementById('app-container')
);

/*
window.addEventListener('load', function() {
	var term = new Terminal({
		colors: Terminal.colors,
		cols: 80,
		rows: 24,
		convertEol: false,
		useStyle: true,
		screenKeys: true,
		cursorBlink: false
	});

	term.open(document.body);

	var socket = io('http://localhost:49000');
	socket.on('connect', function() {
		console.log('connect');
		socket.on('data', function(data) {
			console.log(data);
			term.write(data);
		});
		socket.on('event', function(data){});
		socket.on('disconnect', function(){});
	});

	term.on('data', function(data) {
		socket.emit('data', data);
	});
}, false);
*/