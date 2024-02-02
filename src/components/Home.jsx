import React from "react";
import "./css/Home.css";
import promo from "../images/promo-shogi.gif";
import mapLoc from "../images/map-locations.gif";
import meetup from "../images/meetup.jpg";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const scroll = () => window.scrollTo(0, 0);

  return (
    <main className="home">
      <div className="title">
        <h1>Welcome to Phoenix Shogi</h1>
        {/* React icons for stuff? i.e. phone, email, discord, fb */}
        {/* <p className="disclaimer">
          *We are a developing group and will have updates to all facets of the
          group as the organization develops.
        </p> */}
      </div>

      <div className="meetup">
        <img src={meetup} alt="Map Gif" />
        <div>
          <h2>Meet Up With Us!</h2>
          <p>
            We meet every Second Sunday at the <a href="https://maps.app.goo.gl/wx3XLs76ydchXHMz9">Japanese Friendship Garden</a> from 9am to 12pm!
          </p>
          <p>
            Join our <a href="https://discord.gg/UVEQH9YDEk">Discord Server </a> 
            to chat and play games with us online! You can also fill out {" "}
            <a href="https://www.bit.ly/phxshogi" target="_blank">
              this form{" "}
            </a>
            to join our mailing list and receive regular updates regarding meetups. 
            Check the <NavLink to="news" onClick={scroll}>News </NavLink> 
            page for info on our next in-person meeting.
          </p>
        </div>
      </div>

      <div className="comelearn">
        <div>
          <h2>Come Learn</h2>
          <p>
            Discover the ancient art of Shogi, a game that has enthralled
            strategists for centuries. Whether you're a seasoned player seeking
            new challenges or a curious beginner eager to learn, our club offers
            a vibrant community dedicated to the pursuit of Shogi mastery.
          </p>
          <button onClick={() => navigate("/learn")}>How to play</button>
        </div>
        <img src={promo} alt="Shogi piece promotion" />
      </div>
    </main>
  );
};

export default Home;
