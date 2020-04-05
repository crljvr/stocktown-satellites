import React, { useContext } from 'react';
import CSS from 'cssType';

import InstaFeedHeading from './InstaFeedHeading';
import stockTownColors from '../../assets/colors';
import { UserStore } from '../../store/User';
import InstaFeedPost from './InstaFeedPost';

const InstaFeed: React.FC = () => {

  const { state } = useContext(UserStore)

  const style: CSS.Properties = {
    background: stockTownColors.BLACK,
    margin: '0px 0px 0px 20px',
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