var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

var firstName = 'Aramis';
var message = "Message inserted via variable";

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
