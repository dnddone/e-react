/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './_helpers/store';
// import store from 'store';
import App from './App/App';
import './assets/styles/main.scss';

render(
  <Provider store={store()}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
