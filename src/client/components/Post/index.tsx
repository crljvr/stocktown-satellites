import React from "react";
import { IPost } from "../../interfaces";

const Post: React.SFC<IPost> = ({ displayUrl, comments }) => (
  <div className="container" >
    <div className="row">
      <div className="col">
        <img src={displayUrl} />
      </div>
      <div className="col">
        <div className="container">
          {comments.map(comment => (
            <div className="container">
              <div className="row">
                <div className="col">
                  {/* <img src={comment.owner.} /> */}
                </div>
                <div className="col">
                  <h4>{comment.owner.username}</h4>
                  <p>{comment.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Post