import React from "react";
import "./style.css";
import Comment from "./Comment";
import { comments } from "./commentData.js";
export default function App() {
  console.log(comments);

  const commentsEl = comments.map((comment) => {
    return (
      <Comment
        key={comment.id}
        user={comment.user.username}
        img={comment.user.image.png}
        loggedIn={false}
        age={comment.createdAt}
        body={comment.content}
        score={comment.score}
      />
    );
  });

  return (
    <div className="container">
      <section className="comments">{commentsEl}</section>
      <form className="new-comment-form">
        <textarea placeholder="Add a comment..."></textarea>
        <div className="row">
          <img
            className="form__img"
            src="./images/avatars/image-amyrobson.png"
            alt=""
          ></img>
          <button type="submit" className="form__send-btn">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}
