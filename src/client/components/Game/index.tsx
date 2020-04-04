import React from 'react';
import CSS from 'cssType';
import { H2, H3 } from '../Title';
import Paragraph from '../Paragraph';

// export interface IGame {
//   opponent: string
//   home: boolean
//   win: boolean
//   scoreTeam: number
//   scoreOpponent: number
//   date: Timestamp
// }

interface IProps {
  home: boolean;
  opponent: string;
  scoreTeam: number;
  scoreOpponent: number
}

const Game: React.SFC<IProps> = ({ home, opponent, scoreTeam, scoreOpponent }) => {

  const gameHeaderStyle: CSS.Properties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  return (
    <div>
      <div style={gameHeaderStyle}>
        <TeamResult teamName="StocktownSatellites" score={scoreTeam} />
        <Paragraph>vs.</Paragraph>
        <TeamResult teamName={opponent} score={scoreOpponent} />
      </div>
    </div>
  )
};

export default Game;

interface TeamProps {
  teamName: string
  score: number
}

const TeamResult: React.FC<TeamProps> = ({ teamName, score }) => {
  const style = {

  }

  return (
    <div>
      <H3>{teamName}</H3>
      <H2>{score}</H2>
    </div>
  )
}
