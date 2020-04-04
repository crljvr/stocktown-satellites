import React from 'react';
import CSS from 'cssType'
import { H2, H3, H4, TitleSize } from '../Title';
import stockTownColors from '../../assets/colors';
import Paragraph, { ParagraphSize, ParagraphOpacity } from '../Paragraph';

interface IProps {
  title: string;
  description: string;
  imageUrl: string;
}

const FeatureNewsHero: React.FC<IProps> = ({ title, description, imageUrl }) => {

  const contanterStyle: CSS.Properties = {
    margin: '20px 100px'
  }

  const itemStyle: CSS.Properties = {
    height: '300px',
    width: '100%',
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: 'center'
  }

  return (
    <div style={contanterStyle}>
      <H2>Senaste nyheten</H2>
      <div style={itemStyle}>
        <div style={{
          height: '100%',
          background: stockTownColors.SATELLITE_GREEN_TO_TRANSPARENT
        }}>
          <div style={{ padding: '20px' }}>
            <H3 size={TitleSize.LARGE}>{title}</H3>
            <Paragraph opacity={ParagraphOpacity.MEDIUM}>{description}</Paragraph>
          </div>
        </div>
      </div>
    </div>
  )
};

export default FeatureNewsHero;

