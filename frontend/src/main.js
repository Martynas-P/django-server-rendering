const React = require('react');
const ReactDOM = require('react-dom');
const Provider = require('react-redux').Provider;

const routes = require('./routes');
const env = require('./env');


const mainApp = (
  <Provider store={env.getStore()}>
    {routes}
  </Provider>
);

ReactDOM.render(mainApp, document.getElementById('content'));