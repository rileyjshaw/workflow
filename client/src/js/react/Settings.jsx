/** @jsx React.DOM */
var React = require('react');

var Settings = React.createClass({
  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div className='settings screen'>
        <div className='vcent' />
        <div className='inner'>
          <h1>Settings</h1>
          <h2>are not yet implemented.</h2>
        </div>
      </div>
    );
  }
});

module.exports = Settings;
