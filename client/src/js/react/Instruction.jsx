/** @jsx React.DOM */
var React = require('react');

var Instruction = React.createClass({
  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div className='instruction screen'>
        <h1>Truth API, v0</h1>
        <p>The API is running internally at address <code>172.17.42.1</code>, port <code>49001</code>.</p>
        <h2>Endpoints</h2>
        <h3>/citizens</h3>
        <p>Returns a JSON object containing all Oceania citizen names</p>
        <h3>/locations</h3>
        <p>Returns a JSON object containing a list of all citizen locations in the form:</p>
        <code><pre>{'{'}
  lat: 37.4524,
  long: -122.1161
{'}'}</pre></code>
        <h3>/maxims</h3>
        <p>Returns a JSON object containing the Ingsoc Party maxims</p>
        {this.props.currentStageIndex === 1 ? <h3>/twoplustwo</h3> : ''}
        {this.props.currentStageIndex === 1 ? <p>Returns 5</p> : ''}
      </div>
    );
  }
});

module.exports = Instruction;
