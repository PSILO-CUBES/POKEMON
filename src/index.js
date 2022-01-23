import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App';
import movesReducers from './reducers'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(movesReducers, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION())}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);