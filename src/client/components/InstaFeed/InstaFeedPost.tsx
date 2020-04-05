import React, { useState, useEffect } from 'react';
import CSS from 'cssType';
import { fetchPost } from '../../networking';
import stockTownColors from '../../assets/colors';
import { H2, H3, TitleSize } from '../Title';
import Paragraph, { ParagraphSize, ParagraphOpacity } from '../Paragraph';

interface IProps {
  text: string;
  display_url: string;
  shortcode: string;
  like_count: number;
  comment_count: number;
}

const InstaFeedPost: React.FC<IProps> = ({
  text, display_url, shortcode, like_count, comment_count
}) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetchPost(shortcode, data => {
      const comments = data.edge_media_to_parent_comment.edges.map((comment: any) => {
        return { ...comment.node }
      })
      setComments(comments)
      console.log('checks if rerender')
    })
    console.log('checks if rerender')
  }, [])

  const style: CSS.Properties = {
    background: stockTownColors.DARK_GREY,
    margin: '15px 0'
  }

  const postContentImage: CSS.Properties = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundImage: `url(${display_url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div style={style}>
      <div style={{ padding: '10px' }}>
        <H2 size={TitleSize.MEDIUM}>{text}</H2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Paragraph size={ParagraphSize.X_SMALL} opacity={ParagraphOpacity.MEDIUM}>{like_count} gillar</Paragraph>
          <Paragraph size={ParagraphSize.X_SMALL} opacity={ParagraphOpacity.MEDIUM}>{comment_count} kommentarer</Paragraph>
        </div>
      </div>
      <div style={{ position: 'relative', height: '300px' }}>
        <div style={postContentImage} />
      </div>
      <div style={{ maxHeight: '300px', overflow: 'scroll' }}>
        {comments.map((comment: any, index: number) => (
          <div key={index} style={{ display: 'flex', padding: '10px' }}>
            <img src={comment.owner.profile_pic_url} style={{ height: '50px', marginRight: '10px' }} />
            <div>
              <H3>{comment.text}</H3>
              <Paragraph size={ParagraphSize.X_SMALL} opacity={ParagraphOpacity.MEDIUM}>{comment.owner.username}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default InstaFeedPost;

