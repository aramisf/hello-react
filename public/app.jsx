var GreeterMessage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Some H1</h1>
        <p>Some P</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  render: function () {
    return (
      <form>
        <input type='text' ref='name'/>
        <button>Set Name</button>
      </form>
    )
  }
});

var Greeter = React.createClass({

  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'Default message given by Component defaults'
    }
  },

  getInitialState: function () {
    return {
      name: this.props.name
    }
  },

  onButtonClick: function (e) {
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value; // || this.props.name;
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      });
    }
  },

  render: function () {
    var name = this.state.name;
    var message = this.props.message;
    //return React.createElement('h1', {id: 'asdf'}, 'Hello React.createElement')

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>

        <GreeterMessage/>

        <form onSubmit={this.onButtonClick}>
          {/* `ref` is a react referencer to the tag element. In this case, the
              following input would be accessible by the `name` reference */}
          <input type='text' ref='name'/>
          <button>Set Name</button>
        </form>

        <GreeterForm/>
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
