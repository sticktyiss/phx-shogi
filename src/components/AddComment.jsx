import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";

const AddComment = ({ postId }) => {
  const { token, userId } = useContext(AuthContext);

  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('userId:', userId, 'PostId:', postId)

    axios
      .post(
        "/api/comments",
        { content, userId, postId },
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then(() => {})
      .catch((theseHands) => console.log("Err w/ adding comment", theseHands));
  };

  return (
    <div className="addComment">
      <form className="addCommentForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What do you want to comment?.."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>Add Comment</button>
      </form>
    </div>
  );
};

export default AddComment;
