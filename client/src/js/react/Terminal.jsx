/** @jsx React.DOM */
var React = require('react');

var Terminal = React.createClass({
  getInitialState: function () {
    return {};
  },

  render: function () {
    return <div id='terminal' className='terminal screen' />;
  }
});

module.exports = Terminal;
