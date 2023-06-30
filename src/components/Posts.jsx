import React from "react";
import classes from "./css/Posts.module.css";

const Posts = () => {
  return (
    <main className={classes.main}>
      <div className={classes.posts}>
        <div className={classes.postCard}>
          <h2>
            <span>📣</span> Meet Up{" "}
          </h2>
          <p>
            Hey fellow shogi enthusiasts! 🏯🎌
            <br />
            <br />
            It's time to put our skills to the test in an epic shogi showdown!
            🤩🔥
            <br />
            <br />
            Join us for an exciting meetup this weekend! Here are the details:
            <br />
            <br />
            📅 Date: Sat July 8th <br />
            <br />
            🕒 Time: 7pm <br />
            <br />
            📍 Location: Imperial Outpost Games 4920 West Thunderbird Road
            Glendale, AZ 85306
            <br />
            <br />
            Prepare your strategies and bring your A-game, because we're about
            to have an awesome time together! 🎉🤝
            <br />
            <br />
            See you there! 🏆👑
          </p>
          <h4>Posted: July 8th, 2023</h4>
        </div>
        <div className={classes.postCard}>
          <h2>New beginnings</h2>
          <p>Welcome to Phoenix Shogi</p>
          <h4>- Jun 26, 2023</h4>
        </div>
      </div>
    </main>
  );
};

export default Posts;
