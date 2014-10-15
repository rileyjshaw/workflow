/** @jsx React.DOM */

var React = require('react');
var UI = require('./react/ui.jsx');

var socket = io('http://ws.useworkflow.com');
window.socket = socket;

React.renderComponent(
  <UI />,
  document.getElementById('app-container')
);