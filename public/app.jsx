var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'Default message given by Component defaults'
    }
  },
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    //return React.createElement('h1', {id: 'asdf'}, 'Hello React.createElement')

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
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
