import React from 'react';
import CSS from 'cssType';
import { H2, H3, TitleSize, TitleOpacity } from '../Title';

interface IProps {
  name: string;
  username: string;
  pictureUrl: string;
}

const InstaFeedHeading: React.FC<IProps> = ({ name, username, pictureUrl }) => {
  const style: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10px'
  }

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <img src={pictureUrl} style={{ height: '100px' }} />
      </div>
      <div style={style}>
        <H2 size={TitleSize.MEDIUM}>@{username}</H2>
        <H3 opacity={TitleOpacity.MEDIUM}>{name}</H3>
      </div>
    </div>
  )
}

export default InstaFeedHeading;
