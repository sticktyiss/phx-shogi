import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";

const AddComment = ({ postId, onSubmit, addedCommentState }) => {
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
    
    onSubmit(!addedCommentState);
    };

  return (
    <div className="addComment">
      <form onSubmit={handleSubmit}>
        <div>
          <p>Add Comment:</p>
          <button>Submit</button>
        </div>
        <textarea
          type="text"
          rows={3}
          placeholder="What do you want to comment?.."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AddComment;
