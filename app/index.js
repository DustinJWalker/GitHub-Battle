var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');

class App extends React.component {
  render() {
    return (
      <div>
        Hello React Training!
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
