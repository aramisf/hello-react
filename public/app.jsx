var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({
  render: function () {

    var name = this.props.name;
    var message = this.props.message;
    var text = this.props.text; // readonly

    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>
        <p>{text}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({

  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.message.value;
    var updates = {};

    if (name.length > 0) {
      this.refs.name.value = '';
      //this.props.onNewName(name);
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      //this.props.onNewMessage(message);
      updates.message = message;
    }

    this.props.onUpdateState(updates);
  },

  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' ref='name' placeholder="Enter name here"/>
        {/*<button>Set Name</button>*/}
        <br/>
        <textarea ref='message' placeholder="Enter message here"/>
        {/*<button>Set Message</button>*/}
        <br/><br/>
        <button>Update</button>
      </form>
    )
  }
});

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

var firstName = 'Aramis';
var message = "Message inserted via variable";

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
