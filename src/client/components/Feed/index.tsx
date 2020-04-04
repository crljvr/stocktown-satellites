import React from 'react';
import CSS from 'cssType';
import { H2, H3 } from '../Title';
import Paragraph from '../Paragraph';
import { INewsItem } from '../../interfaces';
import InstaFeed from '../InstaFeed';

const Feed: React.FC = () => {

  const style: CSS.Properties = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 100px',
  }

  return (
    <div style={style}>
      <NewsFeed />
      <InstaFeed />
    </div>
  )
};

export default Feed;

const NewsFeed: React.FC = () => {

  const news: Array<INewsItem> = [
    {
      title: 'Nyhet 1',
      description: 'Lite text',
      imageUrl: 'https://images.unsplash.com/photo-1499754162586-08f451261482?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
    },
    {
      title: 'Nyhet 2',
      description: 'Lite mer text',
      imageUrl: 'https://images.unsplash.com/photo-1466554735730-6281a8638806?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
    },
    {
      title: 'Nyhet 3',
      description: 'JAJA , lite mer',
      imageUrl: 'https://images.unsplash.com/photo-1548311344-5324fa0dbad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
    }
  ]

  return (
    <div style={{ width: '100%' }}>
      {news.map((item: INewsItem, index: number) => (
        <NewsItem key={index} {...item} />
      ))}
    </div>
  )
}

interface NewsItemProps {
  title: string,
  description: string,
  imageUrl?: string
}

const NewsItem: React.FC<NewsItemProps> = ({ title, description, imageUrl }) => {

  const style: CSS.Properties = {
    backgroundImage: imageUrl && `url(${imageUrl})`
  }

  return (
    <div style={style}>
      <H3>{title}</H3>
      <Paragraph>{description}</Paragraph>
    </div>
  )
}
