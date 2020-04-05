import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import { SignInStoreProvider, SignInStore } from './store/SignIn';
import { UserStoreProvider } from './store/User';

import Login from './components/Login';
import App from './components/App';

import './index.scss';

const Root: React.FC = () => {
  const { state } = useContext(SignInStore)
  return state.loggedIn ? <App /> : <Login />;
}

ReactDOM.render(
  <SignInStoreProvider>
    <UserStoreProvider>
      <Root />
    </UserStoreProvider>
  </SignInStoreProvider>
  , document.getElementById('root')
);
