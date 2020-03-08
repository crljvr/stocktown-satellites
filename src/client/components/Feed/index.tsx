import React, { useState, useEffect } from "react";
import Post from "../Post";
import { IPost, IComment } from "../../interfaces";
import { fetchPost } from "../../networking"
import "./index.scss"

interface IProps {
  medias: Array<any>
}

const Feed: React.SFC<IProps> = ({ medias }) => {

  const [posts, setPosts] = useState<Array<IPost>>([])

  useEffect(() => {
    if (medias && !Object.keys(posts).length) {
      medias.forEach(post => {
        fetchPost(post.shortcode, (result: any) => {

          const comments: Array<IComment> = result.edge_media_to_parent_comment.edges.map((item: any) => {
            const { id, text, created_at, owner } = item.node
            const comment: IComment = {
              id,
              text,
              createdAt: created_at,
              owner
            }
            return comment
          })

          const newPost = {
            id: result.id,
            shortcode: result.shortcode,
            displayUrl: result.display_resources[0].src,
            comments: comments
          }
          setPosts([...posts, newPost])
        })
      })
    }
  })

  // "url(" + posts[0].displayUrl + ")"
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {posts.length && (
            <div className="app-hero" style={
              {
                backgroundImage: `url(${posts[0].displayUrl})`
              }
            }>
              <span className="layer" />
              <div className="container">
                <h2>Titel på Bilden</h2>
                <p>av: Calle</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="container">
        <div className="row feed">
          <h3>Feed</h3>
        </div>
        <div className="row">
          {posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div >
  )
}

export default Feed;

// interface HeroProps {
//   posts: Array<IPost>
// }

// const Hero: React.SFC<HeroProps> = ({ posts }) => (
//   <>
//     <img src={""} />
//     {console.log(posts)}
//   </>
// )
