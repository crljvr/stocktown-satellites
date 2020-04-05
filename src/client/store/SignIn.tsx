import React, { createContext, useReducer } from "react";
import { SIGN_IN } from "../actions/SignIn";
import { IAction } from "../interfaces";

interface IState {
  loggedIn: boolean;
}

const initalState = {
  loggedIn: false
}

export const SignInStore = createContext<IState | any>(initalState)

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case SIGN_IN:
      return { loggedIn: action.payload }
    default:
      return state;
  }
}

export const SignInStoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initalState)
  return <SignInStore.Provider value={{ state, dispatch }} >{props.children}</SignInStore.Provider>
}
