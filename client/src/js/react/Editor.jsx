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
  },

  componentWillUnmount: function () {
    this.props.killAce();
  },

  render: function () {
    return (
      <div id='ace'>Editing!</div>
    );
  }
});

var Tree = React.createClass({
    getInitialState: function() {
        return {};
    },

    updateDoc: function (doc, filename) {
      var lang = this.props.ace.setDoc(doc, filename);
      this.setState({ lang: lang });
      return lang;
    },

    handleClick: function (i) {
      return function () {
        alert('You clicked file ' + i + '!');
      }
    },

    render: function () {
      var files = this.props.files.map((function (file, i) {
        return (
          <li onClick={this.handleClick(i)} key={file.key}>{file.name}</li>
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
