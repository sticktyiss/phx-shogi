import React from "react";
import "./css/Home.css";
import promo from "../images/promo-shogi.gif";
import mapLoc from "../images/map-locations.gif";
import map from "../images/map.gif";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="home">
      <div className="title">
        <h1>Welcome to Phoenix Shogi</h1>
        <p className="disclaimer">
          *We are a developing group and will have updates to all facets of the
          group as the organization develops.
        </p>
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
      <div className="meetup">
        <img src={map} alt="Map Gif" />
        <div>
          <h2>Meet Up With Us</h2>
          <p>
            We are still deciding on a permanent location at this time, but in
            the meantime we're meeting at various locations. Please fill{" "}
            <a href="https://www.bit.ly/phxshogi" target="_blank">
              this form{" "}
            </a>
            out so you can receive info regarding meetups. We currently meetup
            once a month.
          </p>
          <p>
            If you have any suggestions, feel free to send a message via the
            contacts at the bottom of the page.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
