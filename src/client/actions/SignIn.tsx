import { Dispatch } from "react";

export const SIGN_IN = 'SIGN_IN';

const SignInActions = {
  signIn: (dispatch: Dispatch<any>, callback?: () => void) => {
    dispatch({
      type: SIGN_IN,
      payload: true
    });

    callback && callback();
  }
};

export default SignInActions;
