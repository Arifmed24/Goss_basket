/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './landing/configureStore';

import App from './landing/App';
import style from './main.css';

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>
  , document.getElementById('app'));
