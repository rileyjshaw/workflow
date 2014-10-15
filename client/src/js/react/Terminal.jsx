/** @jsx React.DOM */
var React = require('react');

var Terminal = React.createClass({
  getInitialState: function () {
    return {
      numUsers: ''
    };
  },

  componentDidMount: function() {
	var term = new window.Terminal({
		colors: Terminal.colors,
		cols: 80,
		rows: 24,
		convertEol: false,
		useStyle: true,
		screenKeys: true,
		cursorBlink: false
	});

	term.open(document.getElementById('terminal'));

	window.socket.on('connect', function() {
		console.log('connect');
		window.socket.on('term', function(data) {
			term.write(data);
		});
		window.socket.on('event', function(data){});
		window.socket.on('disconnect', function(){});
	});

	term.on('data', function(data) {
		window.socket.emit('term', data);
	});

	window.socket.emit('code', {filename: 'index.js'});
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
