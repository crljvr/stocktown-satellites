import React, { FunctionComponent } from 'react';
import stockTownColors from '../../assets/colors'
import Paragraph from '../Paragraph';
import { H2, H3 } from '../ui_components/Title';

interface IProps {
  home: boolean;
  opponent: string;
  scoreTeam: number;
  scoreOpponent: number
}

const Game: FunctionComponent<IProps> = ({ home, opponent, scoreTeam, scoreOpponent }) => (
  <div>
    <div className="game-header">
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
);

export default Game;

interface TeamProps {
  teamName: string;
  score: number;
  homeTeam?: boolean;
}

const TeamResult: FunctionComponent<TeamProps> = ({ teamName, score, homeTeam }) => (
  <div className="team-result">
    <H3 color={stockTownColors.DEEP_GREEN}>{teamName}</H3>
    <H2 color={stockTownColors.DEEP_GREEN}>{score}</H2>
  </div>
);
