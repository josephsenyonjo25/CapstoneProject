import React from 'react';
import { render } from 'react-dom';
import'./index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {Provider} from 'react-redux'; 
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers/index';

const store =createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);