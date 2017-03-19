var React = require('react');

var GreeterForm = require('GreeterForm');
var GreeterMessage = require('GreeterMessage');


var Greeter = React.createClass({

  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'Default message given by Component defaults',
      text: "Lorem ipsum sample text to be fetch by 'this.props'"
    }
  },

  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },

  /* Refactoring code, disabling the following two functions. But leaving here
   * for historical purposes, besides using a code version control system
  handleNewName: function (name) {
    this.setState({
      name: name
    });
  },

  handleNewMessage: function (message) {
    this.setState({
      message: message
    });
  }, */


  handleUpdateState: function (stateData) {
    this.setState(stateData);
  },

  render: function () {
    var name = this.state.name;
    var message = this.state.message;
    var text = this.props.text;
    //return React.createElement('h1', {id: 'asdf'}, 'Hello React.createElement')

    return (
      <div>
        <GreeterMessage name={name} message={message} text={text}/>
        <GreeterForm onUpdateState={this.handleUpdateState}/>
        {/*<GreeterForm onNewName={this.handleNewName}
                     onNewMessage={this.handleNewMessage}
                     onUpdateState={this.handleUpdateState}
        />*/}
      </div>
    );
  }
});

module.exports = Greeter;
