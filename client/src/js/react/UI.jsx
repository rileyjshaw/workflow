var React = require('react');
var TopBar = require('./TopBar.jsx');
var ScreenTabBar = require('./ScreenTabBar.jsx');
var Card = require('./Card.jsx');
var Instruction = require('./Instruction.jsx');
var Editor = require('./Editor.jsx');
var Terminal = require('./Terminal.jsx');
var Settings = require('./Settings.jsx');
var Backdrop = require('./Backdrop.jsx');
var stages = require('../stages.jsx');

var UI = React.createClass({
  getInitialState: function () {
    return {
      activeScreen: 'editor',
      timeRemaining: 11655,
      currentTask: stages[0].title,
      brandColor: '#00b4ae',
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      focusRegion: null,
      files: [
        {
          name: 'first.js',
          key: 1
        },
        {
          name: 'second.c',
          key: 2
        },
        {
          name: 'third.h',
          key: 3
        },
        {
          name: 'fourth.php',
          key: 4
        }
      ],
      cards: stages[0].cards,
      activeCard: 0
    };
  },

  handleResize: function () {
    clearTimeout(this.resizer);
    this.resizer = setTimeout((function () {
      this.setState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
      });
      if (this.state.activeCard !== null) this.refs.backdrop.draw();
    }).bind(this), 200);
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },

  startTimer: function () {
    if (!this.timer) {
      this.timer = setInterval((function () {
        this.setState({ timeRemaining: this.state.timeRemaining - 1 })
      }).bind(this), 1000);
    }
  },

  pauseTimer: function () {
    clearInterval(this.timer);
  },

  hideCards: function () {
    this.setState({ activeCard: null });
  },

  showCards: function () {
    this.setState({
      activeCard: 0,
      focusRegion: this.state.cards[0].focus
    });
  },

  changeCard: function (amount) {
    var newCard = this.state.activeCard + amount;
    this.setState({
      activeCard: newCard,
      focusRegion: this.state.cards[newCard].focus
    });
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  changeScreen: function (screen) {
    this.setState({ activeScreen: screen })
  },

  render: function () {
    var activeCard = this.state.activeCard;
    return (
      // TODO: so jenky
      <div className={this.state.activeScreen + 'Active'}>
        <TopBar showCards={this.showCards} timeRemaining={this.state.timeRemaining} currentTask={this.state.currentTask} />
        <ScreenTabBar changeScreen={this.changeScreen} activeScreen={this.state.activeScreen} />
        <Instruction />
        <Editor files={this.state.files} />
        <Terminal />
        <Settings />
        {activeCard !== null ?
          <Card
            startTimer={this.startTimer}
            pauseTimer={this.pauseTimer}
            changeCard={this.changeCard}
            hideCards={this.hideCards}
            activeCard={activeCard === 0 ? 'first' : activeCard === this.state.cards.length - 1 ? 'last' : false} >
            {this.state.cards[activeCard].content}
          </Card> : ''}
        {activeCard !== null ?
          <Backdrop brandColor={this.state.brandColor}
            ref='backdrop'
            focusRegion={this.state.focusRegion}
            windowHeight={this.state.windowHeight}
            windowWidth={this.state.windowWidth} /> : ''}
      </div>
    );
  }
});

module.exports = UI;
