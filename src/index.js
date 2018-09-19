import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import defaultReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(defaultReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
