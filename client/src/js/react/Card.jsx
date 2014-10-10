/** @jsx React.DOM */
var React = require('react');

var Card = React.createClass({
  getInitialState: function () {
    return {};
  },

  changeCard: function (amount) {
    return (function () {
      this.props.changeCard(amount);
    }).bind(this);
  },

  beginChallenge: function () {
    this.props.hideCards();
    this.props.startTimer();
  },

  render: function () {
    return (
      <div className='card'>
        <div className='cardContent'>
          <div className='vcent' />
          {this.props.children}
        </div>
        <nav>
          <button className='previous' disabled={this.props.activeCard === 'first'} onClick={this.changeCard(-1)}>
            Previous
          </button>
          <button className='next' disabled={this.props.activeCard === 'last'} onClick={this.changeCard(1)}>
            Next
          </button>
          <button className='go' disabled={this.props.activeCard !== 'last'} onClick={this.beginChallenge}>
            Begin
          </button>
        </nav>
      </div>
    );
  }
});

module.exports = Card;
