import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

import configureStore from './store/configureStore';

// import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './containers/App';
import reducers from './reducers';
import './style/index.css';

const composeEnhancers = composeWithDevTools({});

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// {createStoreWithMiddleware(reducers)}
