import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import './Styles/index.css';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './Reducer';

const store=createStore(rootReducer,applyMiddleware(thunk,logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

