import React from 'react';
import {ReactDOM , BrowserRouter }from 'react-dom';
import { Provider, } from 'react-redux';
import store from './store/store';
// eslint-disable-next-line
import { createRoot } from 'react-dom/client';

import App from './App';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
