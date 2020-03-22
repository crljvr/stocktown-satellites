import React from 'react';
import { IGame } from 'client/interfaces';
import './index.scss';
import { H2 } from '../Title';

interface IProps {
  nextGame: IGame
}

const NextGame: React.SFC<IProps> = ({ nextGame }) => (
  <div className="container">
    <div className="row">
      <div className="col">
        <H2>Team1</H2>
      </div>
      <div className="col">
        <H2>vs</H2>
      </div>
      <div className="col">
        <H2>Team2</H2>
      </div>
    </div>
    <div className="container">
      <H2>Söndag 8 Mars</H2>
    </div>
    <div className="container">
      <H2>14:00</H2>
    </div>
    <div className="container">
      <H2>Södertäljehallen</H2>
    </div>
  </div>
);

export default NextGame;
