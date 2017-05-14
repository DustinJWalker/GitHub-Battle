var React = require('react');
var Popular = require('Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav')

class App extends React.component {
  render() {
    return (
      <Router>
      <div className = 'container'>
        <Route path='/popular' component={Popular} />
      </div>
    </Router>
    )
  }
}

module.exports = App;
