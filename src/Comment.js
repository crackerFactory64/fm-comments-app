import React from "react";
import Reply from "./Reply";

export default function Comment(props) {
  const repliesEl = props.replies.map((reply) => {
    return (
      <Reply
        key={reply.id}
        user={reply.user.username}
        img={reply.user.image.png}
        loggedIn={false}
        age={reply.createdAt}
        at={reply.replyingTo}
        body={reply.content}
        score={reply.score}
        replies={reply.replies}
      />
    );
  });

  return (
    <div className="comment-container">
      <article className="comment">
        <div className="row comment__header">
          <img className="comment__img" src={props.img} alt={props.user} />
          <p className="comment__user">
            {props.user}
            <span className={props.loggedIn ? "comment__you" : "hide"}>
              you
            </span>
          </p>

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
          <button className={props.loggedIn ? "hide" : "comment__reply-btn"}>
            Reply
          </button>
          <div className={props.loggedIn ? "" : "hide"}>
            <button className="comment__delete-btn">Delete</button>
            <button className="comment__edit-btn">Edit</button>
          </div>
        </div>
      </article>

      <div className={repliesEl.length > 0 ? "comment__replies" : "hide"}>
        {repliesEl}
      </div>
    </div>
  );
}
