import React from "react";
import "./style.css";
import Comment from "./Comment";
export default function App() {
  return (
    <div className="container">
      <section className="comments">
        <Comment
          user="Lee"
          img="./images/avatars/image-maxblagun.png"
          loggedIn={false}
          age="1 week ago"
          body="Hello! How are you? Me, I am fine thank you very much."
          score="10"
        />
      </section>
    </div>
  );
}
