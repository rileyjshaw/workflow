/** @jsx React.DOM */
var React = require('react');

var ScreenTabBar = React.createClass({
  getInitialState: function () {
    return {};
  },

  changeScreen: function (instruction) {
    return (function () {
      this.props.changeScreen(instruction);
    }).bind(this);
  },

  render: function () {
    var tabs = this.props.screens.map((function (tabName) {
      return (
        <li
          onClick={this.changeScreen(tabName)}
          className={tabName + 'Tab' + (this.props.activeScreen === tabName ? ' active' : '')}
          key={tabName} style={{background: 'url(img/' + tabName + '.svg) center / 60% no-repeat'}}>
        </li>
      );
    }).bind(this));
    return (
      <ul className='screenTabBar'>
        {tabs}
      </ul>
    );
  }
});

module.exports = ScreenTabBar;
