import React from 'react';
import CSS from 'cssType';
import stockTownColors from '../../assets/colors';

export enum ParagraphSize {
  X_SMALL = '14px',
  SMALL = '20px',
  MEDIUM = '35px',
  LARGE = '50px'
}

export enum ParagraphOpacity {
  LiGHT = '0.4',
  MEDIUM = '0.7',
  FULL = '1.0'
}

interface IProps {
  children: any
  size?: ParagraphSize
  color?: stockTownColors
  opacity?: ParagraphOpacity
}

const Paragraph: React.FC<IProps> = ({
  children,
  size = ParagraphSize.SMALL,
  color = stockTownColors.SATELLITE_YELLOW,
  opacity = ParagraphOpacity.FULL
}) => {

  const style: CSS.Properties = {
    fontFamily: 'PT Sans, sans-serif',
    textTransform: 'uppercase',
    fontSize: size,
    fontWeight: 400,
    color: color,
    opacity
  }

  return (
    <div style={style}>
      <p>{children}</p>
    </div>
  )
};

export default Paragraph;
