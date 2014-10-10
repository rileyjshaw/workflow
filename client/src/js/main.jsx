/** @jsx React.DOM */

var React = require('react');
var UI = require('./react/ui.jsx');

React.renderComponent(
  <UI />,
  document.getElementById('app-container')
);
