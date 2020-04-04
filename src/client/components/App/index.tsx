import React from 'react';
import CSS from 'cssType';
import NavigationBar from '../NavigationBar';
import stockTownColors from '../../assets/colors';
import Games from '../Games';

const App: React.SFC = () => {

  const appStyle: CSS.Properties = {
    background: stockTownColors.DEEP_GREEN,
    height: '100%'
  }

  return (
    <div style={appStyle}>
      <NavigationBar />
      <Games />
    </div>
  )
}

export default App;
