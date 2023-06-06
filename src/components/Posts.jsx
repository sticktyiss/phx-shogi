import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";
import AddPost from "./AddPost";

const Posts = () => {
  // const {userId} = useContext(AuthContext)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((theseHands) => {
        console.log(theseHands);
      });
  }, []);

  const mappedPosts = posts.map((post) => {
    return (
      <div key={post.id} className="postCard">
        <h2>{post.postTitle}</h2>
        <h3>{post.users.username}</h3>
        <p>{post.postText}</p>
      </div>
    );
  });

  return (
    <main>
      <NavLink to='addpost'>Add Post</NavLink> //TODO: add button functionality.
      {mappedPosts}</main>
  )
};

export default Posts;
