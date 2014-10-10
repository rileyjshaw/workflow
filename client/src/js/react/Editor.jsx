/** @jsx React.DOM */

var React = require('react');
var ace = require('brace');
require('brace/mode/javascript');
require('brace/theme/monokai');

var Editor = React.createClass({
  getInitialState: function () {
    return {
      ace: null,
      lang: 'Text'
    };
  },

  setAce: function (ace) {
    this.setState({ ace: ace });
  },

  killAce: function () {
    this.state.ace.destroy();
    this.setState({ ace: null });
  },

  render: function () {
    return (
      <div className='editor screen'>
        <Tree files={this.props.files} ace={this.state.ace} />
        <Ace setAce={this.setAce} killAce={this.killAce} ace={this.state.ace} />
      </div>
    );
  }
});

var Ace = React.createClass({
  componentDidMount: function () {
    this.props.setAce(ace.edit('ace'));
    this.props.ace.getSession().setMode('ace/mode/javascript');
    this.props.ace.setTheme('ace/theme/monokai');

    window.socket.on('code', (function(data) {
      this.props.ace.getSession().setValue(data);
      this.props.ace.clearSelection();
    }).bind(this));
  },

  componentWillUnmount: function () {
    this.props.killAce();
  },

  render: function () {
    return (
      <div id='ace'>
      </div>
    );
  }
});

var Tree = React.createClass({
    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {
      window.socket.emit('code', {filename: this.props.files[0].name});
    },

    updateDoc: function (doc, filename) {
      var lang = this.props.ace.setDoc(doc, filename);
      this.setState({ lang: lang });
      return lang;
    },

    handleClick: function (i) {
      window.socket.emit('code', {filename: this.props.files[i].name});
    },

    render: function () {
      var files = this.props.files.map((function (file, i) {
        return (
          <li onClick={this.handleClick.bind(this, i)} key={file.key}>{file.name}</li>
        );
      }).bind(this));

      return (
        <ul className='tree'>
          {files}
        </ul>
      );
    }
});

module.exports = Editor;
