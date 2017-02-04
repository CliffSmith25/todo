import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import todoApp from './js/reducers/list-reducers'
import { createStore } from 'redux'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
