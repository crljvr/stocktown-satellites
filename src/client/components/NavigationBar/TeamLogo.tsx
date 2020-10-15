import React, { FunctionComponent } from 'react';
import StocktownLogo from "../../assets/stocktown_logo.svg";

const TeamLogo: FunctionComponent = () => (
  <div className="team-logo">
    <img src={StocktownLogo} />
  </div>
);

export default TeamLogo;