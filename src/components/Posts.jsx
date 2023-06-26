import React from "react";
import './css/Posts.css'

const Posts = () => {
  const newsPosts = () => {
    return (
      <div className="postCard">
        <h2>New beginnings</h2>
        <div>
        <h4>- Jun 26, 2023</h4> 
        </div>
        <p>Welcome to Phoenix Shogi</p>
      </div>
    )};

  return (
    <main className="posts">
      <div>
      {newsPosts()}
      </div>
      </main>
  )
};

export default Posts;
