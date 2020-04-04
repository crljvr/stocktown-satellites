import React from 'react';
import ReactDOM from 'react-dom';

import { UserStoreProvider } from './store/User';

import App from './components/App';
import './index.scss';

ReactDOM.render(
  <UserStoreProvider>
    <App />
  </UserStoreProvider>
  , document.getElementById('root'));
