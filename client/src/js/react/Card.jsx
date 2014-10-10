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

  render: function () {
    return (
      <div className='card'>
        <div className='cardContent'>
          {this.props.children}
        </div>
        <nav>
          <button className='previous' disabled={this.props.activeCard === 'first'} onClick={this.changeCard(-1)}>
            Previous
          </button>
          <button className='next' disabled={this.props.activeCard === 'last'} onClick={this.changeCard(1)}>
            Next
          </button>
        </nav>
      </div>
    );
  }
});

module.exports = Card;
