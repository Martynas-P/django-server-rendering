const React = require('react');
const Route = require('react-router').Route;
const ReduxRouter = require('redux-router').ReduxRouter;

const App = require('./components/app');
const ComponentA = require('./components/component-a');
const Square = require('./components/square');

const routes = (
  <ReduxRouter>
    <Route path="/" component={App}>
      <Route path="component-a" component={ComponentA} />
      <Route path="square/:number" component={Square} />
    </Route>
  </ReduxRouter>
);

module.exports = routes;