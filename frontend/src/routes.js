if (typeof require.ensure !== 'function') {require.ensure = (a, cb) => cb(require); }

const React = require('react');
const Route = require('react-router').Route;
const ReduxRouter = require('redux-router').ReduxRouter;

const App = require('./components/app');
const ComponentA = require('./components/component-a');
const Square = require('./components/square');
const env = require('./env');

const getAsyncComponent = (location, callback) => {
  require.ensure([], (require) => {
    const AsyncComponent = require('./components/async-component');
    callback(null, AsyncComponent);
  });
}

const routes = (
  <ReduxRouter>
    <Route path="/" component={App}>
      <Route path="component-a" component={ComponentA} />
      <Route path="square/:number" component={Square} />
      <Route path="async-component" getComponents={getAsyncComponent} />
    </Route>
  </ReduxRouter>
);

module.exports = routes;