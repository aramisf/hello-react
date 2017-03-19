var React = require('react');

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

module.exports = GreeterMessage;
