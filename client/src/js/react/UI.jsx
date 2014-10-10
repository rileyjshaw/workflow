var React = require('react');
var TopBar = require('./TopBar.jsx');
var ScreenTabBar = require('./ScreenTabBar.jsx');
var Card = require('./Card.jsx');
var Instruction = require('./Instruction.jsx');
var Editor = require('./Editor.jsx');
var Terminal = require('./Terminal.jsx');
var Settings = require('./Settings.jsx');
var Backdrop = require('./Backdrop.jsx');

var UI = React.createClass({
  getInitialState: function () {
    return {
      activeScreen: 'instruction',
      timeRemaining: 11655,
      currentTask: 'Introduction',
      brandColor: '#00b4ae',
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      focusRegion: '.topBar',
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
      cards: [
          [
            <h1>Hi, Chris!</h1>,
            <p>Ride by ride, we’re changing the way our world works. We imagine a world where cities feel small again. Where transportation and tech bring people together, instead of apart. We see the future as community-driven — and it starts with you.</p>,
            <img src='img/moustache.png' alt='Lyft moustache' />
          ], [
            <p>With your background in <strong>Node.js</strong>, we think that you&#8217;ll make a great infrastructure engineer.</p>
          ]
      ],
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
      if (this.activeCard !== false) this.refs.backdrop.draw();
    }).bind(this), 200);
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },

  startTimer: function () {
    this.timer = setInterval((function () {
      this.setState({ timeRemaining: this.state.timeRemaining - 1 })
    }).bind(this), 1000);
  },

  pauseTimer: function () {
    clearInterval(this.timer);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  changeScreen: function (screen) {
    this.setState({ activeScreen: screen })
  },

  changeCard: function (amount) {
    this.setState({ activeCard: this.state.activeCard + amount })
  },

  render: function () {
    var activeCard = this.state.activeCard;
    return (
      // so jenky
      <div className={this.state.activeScreen + 'Active'}>
        <TopBar timeRemaining={this.state.timeRemaining} currentTask={this.state.currentTask} />
        <ScreenTabBar changeScreen={this.changeScreen} activeScreen={this.state.activeScreen} />
        <Instruction />
        <Editor files={this.state.files} />
        <Terminal />
        <Settings />
        {activeCard !== false ?
          <Card
            startTimer={this.startTimer}
            pauseTimer={this.pauseTimer}
            changeCard={this.changeCard}
            activeCard={activeCard === 0 ? 'first' : activeCard === this.state.cards.length - 1 ? 'last' : false} >
            {this.state.cards[activeCard]}
          </Card> : ''}
        {activeCard !== false ?
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
