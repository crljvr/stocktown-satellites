import React, { useContext, useState } from 'react';
import CSS from 'cssType';

import FirebaseMethods from '../../networking/firebase';
import stockTownColors from '../../assets/colors';
import SignInActions from '../../actions/SignIn';
import { SignInStore } from '../../store/SignIn';
import { H1 } from '../Title';

const Login: React.FC = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { dispatch } = useContext(SignInStore)

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === 'email') {
      return setEmail(value);
    }

    if (name === 'password') {
      return setPassword(value)
    }
  }

  const handleClick = () => {
    FirebaseMethods.signIn(email, password, result => {
      if (result.message) {
        return alert(result.message)
      }
      return SignInActions.signIn(dispatch)
    })
  }

  const backgroundStyle: CSS.Properties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: stockTownColors.DEEP_GREEN
  }

  return (
    <div style={backgroundStyle}>
      <H1>Stocktown Satellites</H1>
      <div>
        <label>Email</label>
        <input name="email" onChange={e => handleChange(e)} value={email} />
      </div>
      <div>
        <label>Lösenord</label>
        <input name="password" onChange={e => handleChange(e)} value={password} />
      </div>
      <button onClick={() => handleClick()}>Logga in</button>
    </div>
  )
};

export default Login;

