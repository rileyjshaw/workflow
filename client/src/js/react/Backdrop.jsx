/** @jsx React.DOM */
var React = require('react');

var Backdrop = React.createClass({
  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
  	var ctx = this.getDOMNode().getContext('2d');
  	ctx.fillStyle = this.props.brandColor;
  	ctx.fillRect(0, 0, this.props.windowWidth, this.props.windowHeight);
  	ctx.clearRect(0, 0, 72, 72);
  },

  render: function () {
    return <canvas width={this.props.windowWidth} height={this.props.windowHeight} className='backdrop' />;
  }
});

module.exports = Backdrop;
