import React, { FunctionComponent } from 'react';

const NavigationList: FunctionComponent = ({ children }) => (
  <ul className="navigation-list">
    {children}
  </ul>
);

export default NavigationList;