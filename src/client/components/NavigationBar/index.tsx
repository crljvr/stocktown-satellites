import React, { Children } from "react";
import CSS from 'cssType';
import { H3 } from "../Title";
import stockTownColors from "../../assets/colors";

const NavigationBar = () => {

  const navigationBarStyle: CSS.Properties = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 50px',
    background: stockTownColors.BLACK
  }

  const navigationListStyle: CSS.Properties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }

  return (
    <div style={navigationBarStyle}>
      <TeamLogo />
      <div style={navigationListStyle}>
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
      <H3>{children}</H3>
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