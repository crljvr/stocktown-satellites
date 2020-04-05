import React, { Children } from "react";
import CSS from 'cssType';
import { H3, TitleSize } from "../Title";
import stockTownColors from "../../assets/colors";

const NavigationBar = () => {

  const navigationBarStyle: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 50px',
    margin: '0 100px',
    background: stockTownColors.BLACK
  }

  const navigationListStyle: CSS.Properties = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%'
  }

  return (
    <div style={navigationBarStyle}>
      <TeamLogo />
      <div style={navigationListStyle}>
        <NavigationItem>Nyheter</NavigationItem>
        <NavigationItem>Matcher</NavigationItem>
        <NavigationItem>Laget</NavigationItem>
        <NavigationItem>Kontakt</NavigationItem>
      </div>
    </div>
  )
}

export default NavigationBar;

const NavigationItem: React.FC = ({ children }) => {

  const style: CSS.Properties = {
    margin: '0 20px'
  }

  return (
    <div style={style}>
      <H3 size={TitleSize.SMALL}>{children}</H3>
    </div>
  )
}

const TeamLogo: React.FC = () => {
  return (
    <div>
      <img src='https://via.placeholder.com/150' />
    </div>
  )
};