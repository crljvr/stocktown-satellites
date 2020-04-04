import React, { useEffect } from 'react';
import CSS from 'cssType';
import NavigationBar from '../NavigationBar';
import stockTownColors from '../../assets/colors';
import Games from '../Games';
import FeatureNewsHero from '../FeatureNewsHero';
import { IFeatureNews } from '../../interfaces';
import Feed from '../Feed';
import { fetchUser } from '../../networking';

const App: React.SFC = () => {

  const fetchData = () => {
    fetchUser(data => {
      console.log('done')
      console.log(data)
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
