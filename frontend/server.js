const path = require('path');

const ReactDOMServer = require('react-dom/server');
const express = require('express');
const bodyParser = require('body-parser');
const React = require('react');
const Provider = require('react-redux').Provider;
const reduxRouterServer = require('redux-router/server');
const DocumentTitle = require('react-document-title');

const env = require('./server/env');
const routes = require('./server/routes');

const app = express();

app.use(bodyParser.json());

app.post('/', function (req, res) {
  const store = env.getStore();

  store.dispatch(reduxRouterServer.match(req.body.url, (error, redirectLocation, routerState) => {
    var status;
    var markup;
    var redirect;

    if (error) {
      status = 500;
    } else if (redirectLocation) {
      status = 301;
      redirect = redirectLocation.pathname + redirectLocation.search;
    } else if (!routerState) {
      status = 404;
    } else {
      status = 200;

      if (req.body.actions && req.body.actions.forEach) {
        req.body.actions.forEach((action) => {
          store.dispatch(action);
        });
      }

      markup = ReactDOMServer.renderToString(
        React.createElement(Provider, {store: store}, routes)
      );

      var title = DocumentTitle.rewind();
    }

    res.json({
        status: status,
        redirect: redirect,
        markup: markup,
        state: store.getState(),
        title: title
      });
  }));
});

var server = app.listen(3000);``