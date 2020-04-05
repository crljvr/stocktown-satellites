import React, { useContext } from 'react';
import CSS from 'cssType';
import { UserStore } from '../../store/User';
import stockTownColors from '../../assets/colors';
import InstaFeedHeading from './InstaFeedHeading';
import InstaFeedPost from './InstaFeedPost';

const InstaFeed: React.FC = () => {

  const { state } = useContext(UserStore)

  const style: CSS.Properties = {
    background: stockTownColors.BLACK,
    margin: '0 20px',
    padding: '20px'
  }

  return (
    <div style={style}>
      <InstaFeedHeading {...state} />
      {state.medias.map((post: any, index: number) => (
        <InstaFeedPost key={index} {...post} />
      ))}
    </div>
  )
};

export default InstaFeed;