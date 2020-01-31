import React from "react";
import FacebookEmoji from "react-facebook-emoji";
const Posts = props => {
  return (
    <div className="posts">
      <h2>{props.info.user}</h2>
      <h3>{props.info.message}</h3>
      <p>Likes: {props.info.likes}</p>
      <p>add a comment:</p>
      <input placeholder="comment something..." />
      <button type="submit">Post Comment</button>
      <button onClick={props.toggleLike}>Like</button>
      {/* Dhruv assisted with setting up Facebook Emoji  */}
      {props.toggle && (
        <div>
          <FacebookEmoji type="like" />
          <FacebookEmoji type="love" />
          <FacebookEmoji type="wow" />
          <FacebookEmoji type="yay" />
          <FacebookEmoji type="angry" />
          <FacebookEmoji type="haha" />
          <FacebookEmoji type="sad" />
        </div>
      )}
      <h5>Comments:</h5>
      {props.info.comments.map(comment => {
        return (
          <div className="comments">
            <p className="comment-user">
              <strong>{comment.user}</strong>:
            </p>
            <p className="comment-message">{comment.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
