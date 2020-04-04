import React, { useEffect, useContext } from 'react';
import CSS from 'cssType';
import NavigationBar from '../NavigationBar';
import stockTownColors from '../../assets/colors';
import Games from '../Games';
import FeatureNewsHero from '../FeatureNewsHero';
import { IFeatureNews } from '../../interfaces';
import Feed from '../Feed';
import { fetchUser } from '../../networking';
import UserActions from '../../actions/User';
import { UserStore } from '../../store/User';

const App: React.SFC = () => {

  const { dispatch } = useContext(UserStore);

  const fetchData = () => {
    fetchUser(({ user, medias }) => {
      UserActions.setUser(user, medias, dispatch, () => {
        console.log("Set user")
      })
    })
  }

  const appStyle: CSS.Properties = {
    background: stockTownColors.DEEP_GREEN,
    height: '100%',
    overflow: 'scroll'
  }

  const featureNewsMockProps: IFeatureNews = {
    title: 'Ny spelare',
    description: 'Efter mycket väntan så välkomnar vi...',
    imageUrl: 'https://images.unsplash.com/photo-1549465704-620b71b14927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
  }

  // componentDidMount
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div style={appStyle}>
      <NavigationBar />
      <Games />
      <FeatureNewsHero {...featureNewsMockProps} />
      <Feed />
    </div>
  )
}

export default App;
