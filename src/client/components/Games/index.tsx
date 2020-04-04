import React from 'react';
import { firestore } from 'firebase'
import CSS from 'csstype';
import { IGame } from 'client/interfaces';
import Game from '../Game';
import stockTownColors from '../../assets/colors';

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

  const style: CSS.Properties = {
    display: 'flex',
    justifyContent: 'space-around',
    background: stockTownColors.DARK_GREY,
    margin: '0 100px',
    padding: '20px'
  }

  return (
    <div style={style} >
      {games.map((game: IGame, index: number) => (
        <Game key={index} {...game} />
      ))}
    </div>
  )
};

export default Games;
