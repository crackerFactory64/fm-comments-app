import React from "react";

export default function Reply(props) {
  return (
    <article className="comment comment__reply">
      <div className="row comment__header">
        <img className="comment__img" src={props.img} alt={props.user} />
        <p className="comment__user">
          {props.user}
          <span className={props.loggedIn ? "comment__you" : "hide"}>you</span>
        </p>

        <p className="comment__age">{props.age}</p>
      </div>
      <p className="comment__body">
        <span className="comment__at">@{props.at} </span>
        {props.body}
      </p>
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
        <button className={props.loggedIn ? "hide" : "comment__reply-btn"}>
          Reply
        </button>
        <div className={props.loggedIn ? "" : "hide"}>
          <button className="comment__delete-btn">Delete</button>
          <button className="comment__edit-btn">Edit</button>
        </div>
      </div>
    </article>
  );
}
