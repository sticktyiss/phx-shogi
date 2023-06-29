import React from "react";
import './css/Posts.css'

const Posts = () => {
  return (
    <main className="posts">
      <div className="postCard">
        <h2>New beginnings</h2>
        <div>
        <h4>- Jun 26, 2023</h4> 
        </div>
        <p>Welcome to Phoenix Shogi</p>
      </div>
      <div className="postCard">
        <h2>Meet Up</h2>
        <div>
        <h4>- July 8th, 2023</h4> 
        </div>
        <p>📣 Hey fellow shogi enthusiasts! 🏯🎌
<br/>
It's time to put our skills to the test in an epic shogi showdown! 🤩🔥
<br/>
Join us for an exciting meetup this weekend! Here are the details:
<br/>
📅 Date: [Insert Date]
🕒 Time: [Insert Time]
📍 Location: [Insert Venue]
<br/>
Prepare your strategies and bring your A-game, because we're about to have an awesome time together! 🎉🤝
<br/>
See you there! 🏆👑</p>
      </div>
      </main>
  )
};

export default Posts;
