var React = require('react');

//var GreeterForm = React.createClass({
// Just showing that we could also export the class directly
module.exports = React.createClass({

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

//module.exports = GreeterForm;
