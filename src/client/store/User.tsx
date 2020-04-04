import React, { createContext, useReducer } from "react";
import { IUser, IAction } from "../interfaces";
import { SET_USER } from "../actions/User";

const initalState: IUser = {
  id: '',
  name: '',
  username: '',
  biography: '',
  pictureUrl: '',
  followers: 0,
  follows: 0,
  medias: []
}

export const UserStore = createContext<IUser | any>(initalState)

const reducer = (state: IUser, action: IAction): IUser => {
  switch (action.type) {
    case SET_USER:
      return { ...action.payload };
    default:
      return state;
  }
}

export const UserStoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initalState)
  return <UserStore.Provider value={{ state, dispatch }} >{props.children}</UserStore.Provider>
}
