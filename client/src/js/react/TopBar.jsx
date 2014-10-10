/** @jsx React.DOM */
var React = require('react');

var TopBar = React.createClass({
  getInitialState: function () {
    return {};
  },

  render: function () {
    var seconds = this.props.timeRemaining;
    var hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    hours += ' hour' + (hours !== 1 ? 's' : '') + ', ';
    minutes += ' minute' + (minutes !== 1 ? 's' : '') + ', ';
    seconds += ' second' + (seconds !== 1 ? 's' : '');

    return (
      <div className='topBar'>
        <div className='left' onClick={this.props.showCards}>
          <img className='logo' src='img/logo.png' alt='Lyft logo' />
          <p className='currentTask'>{this.props.currentTask}</p>
        </div>
        <button className='hintButton' onClick={this.props.showHint}>Hint</button>
        <p className='timeRemaining'>Time remaining: {hours + minutes + seconds}</p>
      </div>
    );
  }
});

module.exports = TopBar;
