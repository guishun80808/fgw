import '../../../node_modules/umi-plugin-polyfills/lib/ie9.js';
import createHashHistory from 'history/createHashHistory'
import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from '../../../node_modules/fastclick/lib/fastclick.js'

// Initialize fastclick
document.addEventListener(
  'DOMContentLoaded',
  () => {
    FastClick.attach(document.body);
  },
  false,
);

// create history
window.g_history = createHashHistory();

// render
function render() {
  const DvaContainer = require('./DvaContainer').default;
  ReactDOM.render(React.createElement(
    DvaContainer,
    null,
    React.createElement(require('./router').default)
  ), document.getElementById('root'));
}

const moduleBeforeRendererPromises = [];

Promise.all(moduleBeforeRendererPromises).then(() => {
  render();
}).catch((err) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(err);
  }
});

require('../../global.css');

// hot module replacement
if (module.hot) {
  module.hot.accept('./router', () => {
    render();
  });
}
