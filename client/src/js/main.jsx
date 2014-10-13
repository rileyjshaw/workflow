/** @jsx React.DOM */

var React = require('react');
var UI = require('./react/ui.jsx');

var socket = io('http://104.131.157.163:3001');
window.socket = socket;

React.renderComponent(
  <UI />,
  document.getElementById('app-container')
);

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

	term.open(document.getElementById('terminal'));

	socket.on('connect', function() {
		console.log('connect');
		socket.on('term', function(data) {
			term.write(data);
		});
		socket.on('event', function(data){});
		socket.on('disconnect', function(){});
	});

	term.on('data', function(data) {
		socket.emit('term', data);
	});

	window.socket.emit('code', {filename: this.props.files[0].name});
}, false);