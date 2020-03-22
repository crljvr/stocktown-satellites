import React from 'react';
import { IGame } from 'client/interfaces';
import { H2 } from '../Title';
import './index.scss';

interface IProps {
  game: IGame
}

const Game: React.SFC<IProps> = ({ game }) => {

  return (
    <div className="container">
      <H2>{game.opponent}</H2>
    </div>
  )
};

export default Game;
