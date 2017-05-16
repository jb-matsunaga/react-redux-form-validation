import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/reduxStore';
import App from './containers/App';

console.log('configureStore = ' + configureStore());
const store = configureStore();
console.log('store =' + store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('fn-root')
)
