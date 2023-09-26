import React from "react";
import classes from "./css/Posts.module.css";

const Posts = () => {
  return (
    <main className={classes.main}>
      <div className={classes.posts}>
        <div className={classes.postCard}>
          <h2 className={classes.white}>Weekly Meetup</h2>
          <p>
            🗓️ Our Shogi Club is
            meeting online every Sunday and Wednesday. 🖥️♟️
            <br />
            <br />
            We host our online meetups via our <a href="https://discord.gg/UVEQH9YDEk">Discord Server</a>. Please also create an account on <a href="https://lishogi.org">Lishogi</a>, where we will be playing our games.
            <br />
            <br />
            👉 Join us for brain-teasing battles, strategy swaps, and a whole
            lot of fun. It's the perfect way to level up your shogi game while
            making new friends from around Arizona! 🤝
            <br />
            <br />
            See you online! 📲👑
          </p>
          <h4>Posted: Sep 26th, 2023</h4>
        </div>
        <div className={classes.postCard}>
          <h2>ASU Meetup</h2>
          <p>
            🎉🀄 Exciting News! Shogi Meets Mahjong 🀄🎉
            <br />
            <br />
            Get ready for an epic clash of strategy and skill as Phoenix Shogi
            teams up with the ASU Mahjong Club for an unforgettable evening!
            🏯🀄
            <br />
            <br />
            📅 Date: September 27th
            <br />
            <br />
            🕔 Time: 5:00 PM - 9:00 PM
            <br />
            <br />
            📍 Location: ASU Durham Hall - Room: L1-08
            <br />
            <br />
            It's a showdown you won't want to miss! Join us for a night of
            brain-teasing moves, thrilling matches, and tons of fun. Whether
            you're a seasoned Shogi samurai or a Mahjong master, there's a game
            for you.
            <br />
            <br />
            Bring your A-game, bring your friends, and let's make this a
            legendary evening together. <br /> See you there! 🤝🎲
            <br />
            <br />
            #ShogiMeetsMahjong #phxshogi #ASUClubs #ShogiWithMahjong
          </p>
          <h4>Posted: Sep 26th, 2023</h4>
        </div>
        <div className={classes.postCard}>
          <h2>Meet @ JFG</h2>
          <p>
            🏯🌸 Join us for a morning of strategic moves and friendly
            competition at the serene Japanese Friendship Garden of Phoenix.
            🌿🗡️
            <br />
            <br />
            📅 Date: September 10th
            <br />
            <br />
            ⏰ Time: 9:00 AM - 12:00 PM
            <br />
            <br />
            📍 Location: Japanese Friendship Garden
            <br />
            1125 N. 3rd Avenue, Phoenix, Az 85003
            <br />
            <br />
            Whether you're a grandmaster or just starting your shogi journey,
            this event is for you. Sharpen your skills, make new friends, and
            enjoy the beauty of the garden. 🌼🤝
            <br />
            <br />
            Don't miss out on the chance to experience the art of shogi in a
            tranquil setting! See you on the 10th! 🎐🙌
          </p>
          <h4>Posted: Aug 16th, 2023</h4>
        </div>
        <div className={classes.postCard}>
          <h2>SABOTEN CON</h2>
          <p>
            🎌🏯 Calling all shogi enthusiasts and strategic masterminds! 🤝🤖
            <br />
            <br />
            Get ready for a shogi experience like no other at Saboten Con in
            Phoenix, AZ! 🌵🎉
            <br />
            <br />
            🗓️ Date: Sept. 1-4
            <br />
            <br />
            📍 Location: 340 N 3rd St, Phoenix, AZ 85004
            <br />
            <br />
            Join us on a journey of checkmates and castle captures that will
            keep your mind racing and your spirits high throughout the entire
            convention! 🎮🔥
            <br />
            <br />
            Whether you're a shogi sensei or a curious beginner, our club
            welcomes players of all skill levels. Prepare to immerse yourself in
            battles of wits, camaraderie, and maybe even a surprise or two! 🤩🏆
            <br />
            <br />
            See you at Saboten Con, where the shogi boards will be set, the
            pieces will clash, and the thrill of victory awaits! 🎌🤝
          </p>
          <h4>Posted: Aug 16th, 2023</h4>
        </div>
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
          <p>Phoenix Shogi website published.</p>
          <h4>- Jun 26, 2023</h4>
        </div>
      </div>
    </main>
  );
};

export default Posts;
