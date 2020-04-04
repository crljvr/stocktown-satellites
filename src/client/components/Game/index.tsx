import React from 'react';
import CSS from 'cssType';
import { H2, H3 } from '../Title';
import Paragraph from '../Paragraph';
import stockTownColors from '../../assets/colors';

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
    padding: '10px',
    background: stockTownColors.WHITE
  }

  return (
    <div>
      <div style={gameHeaderStyle}>
        {home ? (
          <>
            <TeamResult teamName="Stocktown Satellites" score={scoreTeam} homeTeam />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Paragraph color={stockTownColors.DEEP_GREEN}>vs.</Paragraph>
            </div>
            <TeamResult teamName={opponent} score={scoreOpponent} />
          </>
        ) : (
            <>
              <TeamResult teamName={opponent} score={scoreOpponent} homeTeam />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Paragraph color={stockTownColors.DEEP_GREEN}>vs.</Paragraph>
              </div>
              <TeamResult teamName="Stocktown Satellites" score={scoreTeam} />
            </>
          )}
      </div>
    </div>
  )
};

export default Game;

interface TeamProps {
  teamName: string;
  score: number;
  homeTeam?: boolean;
}

const TeamResult: React.FC<TeamProps> = ({ teamName, score, homeTeam }) => {
  const style: CSS.Properties = {
    display: 'flex',
    alignItems: homeTeam ? 'flex-start' : 'flex-end',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '33%'
  }

  return (
    <div style={style}>
      <H3 color={stockTownColors.DEEP_GREEN}>{teamName}</H3>
      <H2 color={stockTownColors.DEEP_GREEN}>{score}</H2>
    </div>
  )
}
