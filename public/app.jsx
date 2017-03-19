var Greeter = React.createClass({

  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'Default message given by Component defaults'
    }
  },

  onButtonClick: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;
    alert(name);
  },

  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    //return React.createElement('h1', {id: 'asdf'}, 'Hello React.createElement')

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          {/* `ref` is a react referencer to the tag element. In this case, the
              following input would be accessible by the `name` reference */}
          <input type='text' ref='name'/>
          <button>Set Name</button>
        </form>
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
