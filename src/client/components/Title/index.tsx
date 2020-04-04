import React from 'react';
import CSS from 'csstype';
import stockTownColors from '../../assets/colors';

export enum TitleSize {
  SMALL = '14px',
  MEDIUM = '20px',
  LARGE = '60px'
}

export enum TitleOpacity {
  LiGHT = '0.4',
  MEDIUM = '0.7',
  FULL = '1.0'
}

interface IProps {
  children: any
  size?: TitleSize
  color?: stockTownColors
  opacity?: TitleOpacity
}

export const H1: React.FC<IProps> = ({ children, size = TitleSize.MEDIUM, color = stockTownColors.SATELLITE_YELLOW, opacity = TitleOpacity.FULL }) => {
  const fontStyle: CSS.Properties = {
    fontFamily: 'PT Sans, sans-serif',
    textTransform: 'uppercase',
    fontSize: size,
    color: color,
    opacity
  }

  return (
    <div style={fontStyle}>
      <h1>{children}</h1>
    </div>
  )
};

export const H2: React.SFC<IProps> = ({ children, size = TitleSize.SMALL, color = stockTownColors.SATELLITE_YELLOW, opacity = TitleOpacity.FULL }) => {
  const fontStyle: CSS.Properties = {
    fontFamily: 'PT Sans, sans-serif',
    textTransform: 'uppercase',
    fontSize: size,
    color: color,
    opacity
  }

  return (
    <div style={fontStyle}>
      <h2>{children}</h2>
    </div>
  )
}

export const H3: React.SFC<IProps> = ({ children, size = TitleSize.SMALL, color = stockTownColors.SATELLITE_YELLOW, opacity = TitleOpacity.FULL }) => {
  const fontStyle: CSS.Properties = {
    fontFamily: 'PT Sans, sans-serif',
    textTransform: 'uppercase',
    fontSize: size,
    color: color,
    opacity
  }

  return (
    <div style={fontStyle}>
      <h3>{children}</h3>
    </div>
  )
}

export const H4: React.SFC<IProps> = ({ children, size = TitleSize.SMALL, color = stockTownColors.SATELLITE_YELLOW, opacity = TitleOpacity.FULL }) => {
  const fontStyle: CSS.Properties = {
    fontFamily: 'PT Sans, sans-serif',
    textTransform: 'uppercase',
    fontSize: size,
    color: color,
    opacity
  }

  return (
    <div style={fontStyle}>
      <h4>{children}</h4>
    </div>
  )
}