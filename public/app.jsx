var Greeter = React.createClass({
  render: function () {
    //return React.createElement('h1', {id: 'asdf'}, 'Hello React.createElement')
    return (
      <div>
        <h1>Hello React!</h1>
        <p>Paragraph rendered from inside the component :)</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
