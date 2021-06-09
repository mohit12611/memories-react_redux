import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'; // keep track of the Store which is at global state and that allows us to access that store from any whw=ere from the app.
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';
import './index.css';
//create store

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

