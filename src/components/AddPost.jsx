import React from "react";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/authContext";
import './css/Posts.css'

const AddPost = () => {
  const { token, userId } = useContext(AuthContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "/api/posts",
        { title, content, userId },
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then(() => {
        navigate("/posts");
      })
      .catch((theseHands) => console.log("add post failed", theseHands));
  };

  return (
    <main>
      <NavLink className="addPostRender" to="/posts">
        Cancel
      </NavLink>
      <form className="addPostForm" onSubmit={handleSubmit}>
        <div>
        <label>Title:</label>
        <input
          type="text"
          placeholder="Insert Title..."
          value={title}
          maxLength={20}
          onChange={(e) => setTitle(e.target.value)}
          className="addPostTitle"
          />
        </div>
        <textarea
          type="text"
          placeholder="What do you want to post?.."
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="addPostText"
        />
        <button className="addPostButton">Submit</button>
      </form>
    </main>
  );
};

export default AddPost;
