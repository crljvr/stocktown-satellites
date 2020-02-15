import React, { Component } from 'react';
import './app.scss';
import ReactImage from './react.png';

interface IProps {
  //
}

interface IState {
  username: string;
}

export default class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = { username: "" };
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
