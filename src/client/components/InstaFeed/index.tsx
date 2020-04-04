import React, { useContext } from 'react';
import CSS from 'cssType';
import { H2, H3, TitleSize, TitleOpacity } from '../Title';
import { UserStore } from '../../store/User';
import stockTownColors from '../../assets/colors';

const InstaFeed: React.FC = () => {

  const { state } = useContext(UserStore)

  const style: CSS.Properties = {
    background: stockTownColors.BLACK,
    margin: '0 20px',
    padding: '20px'
  }

  return (
    <div style={style}>
      <H2>Flödet</H2>
      <div>
        <InstaFeedHeading {...state} />
      </div>
      {state.medias.map((post: any, index: number) => (
        <InstaFeedPost key={index} />
      ))}
    </div>
  )
};

export default InstaFeed;

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

const InstaFeedPost = () => {
  const style: CSS.Properties = {
    //
  }

  return (
    <div>
      <H2>something</H2>
    </div>
  )
}
