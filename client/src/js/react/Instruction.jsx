/** @jsx React.DOM */
var React = require('react');

var Instruction = React.createClass({
  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div className='instruction screen'>
        <h1>Lyft API, v0.0.0_alpha</h1>
        <p>The API is running internally at address <code>172.17.42.1</code>, port <code>49001</code>.</p>
        <h2>Endpoints</h2>
        <h3>/activeDrivers</h3>
        <p>Returns a JSON object containing a list of all currently active driver names</p>
        {this.props.currentStageIndex === 1 ? <h3>/isThisLyft</h3> : ''}
        {this.props.currentStageIndex === 1 ? <p>Returns the string YES</p> : ''}
        <h3>/locations</h3>
        <p>Returns a JSON object containing a list of all driver locations in the form:</p>
        <code><pre>{'{'}
  lat: 37.4524,
  long: -122.1161
{'}'}</pre></code>
        <h3>/users</h3>
        <p>Returns a JSON object containing a list of all user names currently using Lyft</p>
      </div>
    );
  }
});

module.exports = Instruction;
