const redux = require('redux');
const reduxRouter = require('redux-router');
const reduxThunk = require('redux-thunk');
const reduxRouterServer = require('redux-router/server');
const createBrowserHistory = require('history/lib/createBrowserHistory');
const createMemoryHistory = require('history/lib/createMemoryHistory');

const store = require('./store');
const routes = require('./routes');


const isBrowser = !!global.window;

const history = isBrowser ? createBrowserHistory : createMemoryHistory;
const reduxReactRouter = isBrowser ? reduxRouter.reduxReactRouter({ createHistory: history }) : reduxRouterServer.reduxReactRouter({routes: routes, createHistory: history})


module.exports = {
  isBrowser: isBrowser,
  getStore: () => {;
    return redux.compose(
      redux.applyMiddleware(reduxThunk),
      reduxReactRouter
    )((reducer) => {
      const initialState = isBrowser ? window.__INITIAL_STATE__ : undefined;

      return redux.createStore(reducer, initialState);
    })(store);
  }
};