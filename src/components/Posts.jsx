import React from "react";
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ShowComments from "./ShowComments";
import './css/Posts.css'

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((theseHands) => {
        console.log(theseHands);
      });
  }, []);

  const mappedPosts = posts.map((post) => {
    const dateString = post.updatedAt
    const date = new Date(dateString)
    const formattedDate = date.toLocaleString()

    return (
      <div key={post.id} className="postCard">
        <h2>{post.postTitle}</h2>
        <div>
        <h3>{post.user.username}</h3>
        <h4>- {formattedDate}</h4> 
        </div>
        <p>{post.postText}</p>
        <ShowComments postId={post.id} />
      </div>
    );
  });

  return (
    <main className="posts">
      <NavLink className='addPostRender' to='/addpost'>Add Post</NavLink>
      <div>
      {mappedPosts}
      </div>
      </main>
  )
};

export default Posts;
