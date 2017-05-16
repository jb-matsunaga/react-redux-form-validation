import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/reduxStore';
import App from './containers/app';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('fn-root')
)
