import stockTownColors from '../../assets/colors';
import React, { FunctionComponent } from 'react';
import { H3 } from '../ui_components/Title';

const NavigationItem: FunctionComponent = ({ children }) => (
  <div
    className="navigation-item"
    onClick={() => console.log('NAV-CLICK')}
  >
    <li>
      <H3 color={stockTownColors.DEEP_GREEN}>
        {children}
      </H3>
    </li>
  </div>
);

export default NavigationItem;