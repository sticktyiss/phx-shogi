import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";

const AddComment = ({postId}) => {
  const { token, userId } = useContext(AuthContext);

  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

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

  return <div className="addComment">
    <form className="addCommentForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="What do you want to comment?.." value={content} />
    </form>
  </div>;
};

export default AddComment;
