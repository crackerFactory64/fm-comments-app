import React from "react";

export default function Comment(props) {
  return (
    <article className="comment">
      <div className="row comment__header">
        <img className="comment__img" src={props.img} alt={props.user} />
        <p className="comment__user">{props.user}</p>
        <p className={props.loggedIn ? "comment__you" : "hide"}>you</p>
        <p className="comment__age">{props.age}</p>
      </div>
      <p className="comment__body">{props.body}</p>
      <div className="row comment__footer">
        <div className="row comment__votes">
          <button
            className="comment__vote-btn up"
            aria-label="vote up"
            id="upvote"
          ></button>
          <span className="comment__score">{props.score}</span>
          <button
            className="comment__vote-btn down"
            aria-label="vote down"
            id="downvote"
          ></button>
        </div>
        <button className="comment__reply-btn">Reply</button>
      </div>
    </article>
  );
}
