import React from 'react';
import CSS from 'cssType';
import stockTownColors from '../../assets/colors';

const Paragraph: React.FC = ({ children }) => {
  const style: CSS.Properties = {
    fontFamily: 'PT Sans, sans-serif',
    fontWeight: 400,
    color: stockTownColors.SATELLITE_YELLOW
  }

  return (
    <div style={style}>
      <p>{children}</p>
    </div>
  )
};

export default Paragraph;
