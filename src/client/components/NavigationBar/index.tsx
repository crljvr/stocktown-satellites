import React, { FunctionComponent } from "react";
import NavigationItem from "./NavigationItem";
import NavigationList from "./NavigationList";
import TeamLogo from "./TeamLogo";
import "./index.scss";

const NavigationBar: FunctionComponent = () => (
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