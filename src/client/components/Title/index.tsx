import React from 'react';
import CSS from 'csstype';
import stockTownColors from '../../assets/colors';

interface IProps {
  children: any
}

const fontStyle: CSS.Properties = {
  fontFamily: 'PT Sans, sans-serif',
  color: stockTownColors.SATELLITE_YELLOW
}

export const H1: React.FC<IProps> = ({ children }) => (
  <div style={fontStyle}>
    <h1>{children}</h1>
  </div>
);

export const H2: React.SFC<IProps> = ({ children }) => (
  <div style={fontStyle}>
    <h2>{children}</h2>
  </div>
);

export const H3: React.SFC<IProps> = ({ children }) => (
  <div style={fontStyle}>
    <h3>{children}</h3>
  </div>
);