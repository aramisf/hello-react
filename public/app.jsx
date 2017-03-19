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

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      this.props.onNewMessage(message);
    }
  },

  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' ref='name'/>
        <button>Set Name</button>
        <br/>
        <input type='text' ref='message'/>
        <button>Set Message</button>
      </form>
    )
  }
});

var Greeter = React.createClass({

  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'Default message given by Component defaults',
      text: "Sample text to be fetch by 'this.props'"
    }
  },

  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },

  handleNewName: function (name) {
    this.setState({
      name: name
    });
  },

  handleNewMessage: function (message) {
    this.setState({
      message: message
    });
  },

  render: function () {
    var name = this.state.name;
    var message = this.state.message;
    var text = this.props.text;
    //return React.createElement('h1', {id: 'asdf'}, 'Hello React.createElement')

    return (
      <div>
        <GreeterMessage name={name} message={message} text={text}/>
        <GreeterForm onNewName={this.handleNewName}
                     onNewMessage={this.handleNewMessage}
        />
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
