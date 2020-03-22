import React from 'react';
import { firestore } from 'firebase';
import NextGame from '../NextGame';
import LeaderBoard from '../LeaderBoard';
import { IGame } from 'client/interfaces';
import './index.scss';

const Hero = () => {

  const nextGame: IGame = {
    opponent: 'SBBK',
    home: true,
    win: false,
    scoreTeam: 81,
    scoreOpponent: 98,
    date: new firestore.Timestamp(1321223, 0)
  }

  return (
    <div className="container hero">
      <div className="row">
        <div className="col" />
        <div className="col-4">
          <NextGame nextGame={nextGame} />
        </div>
        <div className="col-4">
          <LeaderBoard />
        </div>
      </div>
    </div>
  )
};

export default Hero;

