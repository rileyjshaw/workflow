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
      activeScreen: 'instruction',
      timeRemaining: 11655,
      currentStageIndex: 0,
      currentStage: stages[0],
      currentTask: stages[0].title,
      hints: stages[0].hints,
      brandColor: '#04bac6',
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      focusRegion: null,
      files: [
        {
          name: 'index.js',
          key: 1
        },
        {
          name: 'package.json',
          key: 2
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

  componentDidUpdate: function (prevProps, prevState) {
    if (prevState.currentStageIndex !== this.state.currentStageIndex) {
      this.pauseTimer();
      this.showCards();
    }
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
    this.timer = null;
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

  showHint: function () {
    alert(this.state.hints && this.state.hints[0] || 'There are no more hints for this stage');
    this.setState({ hints: this.state.hints.slice(1) });
  },

  advanceStage: function () {
    var nextStageIndex = this.state.currentStageIndex + 1;
    var nextStage = stages[nextStageIndex];
    this.setState({
      activeScreen: 'instruction',
      currentStageIndex: nextStageIndex,
      currentStage: nextStage,
      currentTask: nextStage.title,
      cards: nextStage.cards,
      hints: nextStage.hints
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
        <TopBar
          showCards={this.showCards}
          timeRemaining={this.state.timeRemaining}
          currentTask={this.state.currentTask}
          showHint={this.showHint} />
        <ScreenTabBar changeScreen={this.changeScreen} activeScreen={this.state.activeScreen} screens={this.state.currentStage.screens} />
        <Instruction currentStageIndex={this.state.currentStageIndex} />
        <Editor files={this.state.files} />
        <Terminal advanceStage={this.advanceStage} />
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
