/** @jsx React.DOM */
var React = require('react');

var Backdrop = React.createClass({
  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
  	this.ctx = this.getDOMNode().getContext('2d');
    this.draw(this.props.focusRegion);
  },

  draw: function (x, y, w, h) {
  	this.ctx.fillStyle = this.props.brandColor;
    this.ctx.clearRect(0, 0, this.props.windowWidth, this.props.windowHeight);
    this.ctx.fillRect(0, 0, this.props.windowWidth, this.props.windowHeight);
    if (typeof x === 'string') {
      var pos, elements = document.querySelectorAll(x);
      for (var i = 0, _len = elements.length; i < _len; i++) {
        pos = elements[i].getBoundingClientRect();
        this.ctx.clearRect(pos.left, pos.top, pos.right - pos.left, pos.bottom - pos.top);
      }
    } else if (typeof x === 'number') this.ctx.clearRect(x, y, w, h);
  },

  render: function () {
    return <canvas width={this.props.windowWidth} height={this.props.windowHeight} className='backdrop' />;
  }
});

module.exports = Backdrop;
