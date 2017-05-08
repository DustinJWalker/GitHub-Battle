var React = require('react');
var Popular = require(./'Popular');

class App extends React.component {
  render() {
    return (
      <div className = 'container'>
        <Popular />
      </div>
    )
  }
}

module.exports = App;
