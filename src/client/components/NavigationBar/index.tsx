import stockTownColors from "../../assets/colors";
import React, { FunctionComponent } from "react";
import StocktownLogo from "../../assets/stocktown_logo.svg";
import { A, H3 } from "../ui_components/Title";
import "./index.scss";

const NavigationBar = () => (
  <div className="navigation-bar">
    <TeamLogo />
    <NavigationList>
      <NavigationItem>Nyheter</NavigationItem>
      <NavigationItem>Matcher</NavigationItem>
      <NavigationItem>Laget</NavigationItem>
      <NavigationItem>Kontakt</NavigationItem>
    </NavigationList>
  </div>
);

export default NavigationBar;

const NavigationItem: FunctionComponent = ({ children }) => (
  <div className="navigation-item">
    <li>
      <H3 color={stockTownColors.DEEP_GREEN}>
        <A onClick={() => console.log('aaa')}>
          {children}
        </A>
      </H3>
    </li>
  </div>
);

const NavigationList: FunctionComponent = ({ children }) => (
  <ul className="navigation-list">
    {children}
  </ul>
);

const TeamLogo: FunctionComponent = () => (
  <div className="team-logo">
    <img src={StocktownLogo} />
  </div>
);