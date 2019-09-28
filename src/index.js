import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  window.devToolsExtension
    ? compose(
        applyMiddleware(thunk),
        window.devToolsExtension && window.devToolsExtension(),
      )
    : applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
