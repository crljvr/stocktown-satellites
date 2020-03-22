import React from 'react';
import { firestore } from 'firebase'
import { IGame } from 'client/interfaces';
import Game from '../Game';
import './index.scss';

const Games = () => {

  const games: Array<IGame> = [
    {
      opponent: 'BK Foul',
      home: true,
      win: true,
      scoreTeam: 97,
      scoreOpponent: 80,
      date: new firestore.Timestamp(1324400, 0)
    },
    {
      opponent: 'Visby',
      home: false,
      win: true,
      scoreTeam: 89,
      scoreOpponent: 87,
      date: new firestore.Timestamp(1329330, 0)
    },
    {
      opponent: 'SBBK',
      home: true,
      win: false,
      scoreTeam: 81,
      scoreOpponent: 98,
      date: new firestore.Timestamp(1321223, 0)
    }
  ]

  return (
    <div className="container-fluid">
      <div className="row">
        {games.map((game: IGame, index: number) => (
          <div className="col">
            <Game key={index} game={game} />
          </div>
        ))}
      </div>
    </div>
  )
};

export default Games;
