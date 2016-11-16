const React = require('react');
const ReactDom = require('react-dom');
const routes = require('./config/routes');

ReactDom.render(
  routes,
  document.getElementById('app')
);
