const React = require('react');
const ReactDOM = require('react-dom');
const Provider = require('react-redux').Provider;
const match = require('react-router').match;

const routes = require('./routes');
const env = require('./env');

const { pathname, search, hash } = window.location
const location = pathname + search + hash;

match({routes, location}, () => {
  const mainApp = (
    <Provider store={env.getStore()}>
      {routes}
    </Provider>
  );

  ReactDOM.render(mainApp, document.getElementById('content'));
});