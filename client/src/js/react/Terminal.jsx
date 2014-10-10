/** @jsx React.DOM */
var React = require('react');

var Terminal = React.createClass({
  getInitialState: function () {
    return {
      numUsers: ''
    };
  },

  answer: function (e) {
    e.preventDefault();
    if (this.state.numUsers === '3003') {
      this.props.advanceStage();
    } else alert('Not quite!');
    return false;
  },

  numUsersChange: function (e) {
    this.setState({ numUsers: e.target.value });
  },

  render: function () {
    return (
      <div className='terminal screen'>
        <div id='terminal' />
        <form onSubmit={this.answer}>
          <label>Number of users:</label>
          <input type='text' name='numUsers' value={this.state.numUsers} onChange={this.numUsersChange} />
          <input type='submit' />
        </form>
      </div>
    );
  }
});

module.exports = Terminal;
