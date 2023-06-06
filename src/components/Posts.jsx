import React from "react";
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ShowComments from "./ShowComments";
// import AuthContext from "../store/authContext";
// import AddPost from "./AddPost";

const Posts = () => {
  // const {userId} = useContext(AuthContext)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => {
        console.log('RES.data:', res.data)
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
        <h3>{post.user.username}</h3>
        <p>{post.postText}</p>
        <ShowComments comments={post.comments} />
      </div>
    );
  });

  return (
    <main>
      <NavLink className='addPostRender' to='/addpost'>Add Post</NavLink>
      {mappedPosts}</main>
  )
};

export default Posts;
