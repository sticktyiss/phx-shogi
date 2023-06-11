import React from "react";
import "./css/Home.css";
import promo from '../images/promo-shogi.gif'
import mapLoc from '../images/map-locations.gif'
import map from '../images/map.gif'

const Home = () => {
  return (
    <main className="Home">
      <div className="title">
      <h1>Welcome to Phoenix Shogi</h1>
      <p className="disclaimer">
        *We are a developing group and will have updates to all facets of the
        group as the organization develops.
      </p>
      </div>
      <div className="comelearn fade-in">
        <div>
        <h2>Come Learn</h2>
        <p>The captivating "Game of Generals," is an ancient Japanese chess variant that breathes life into the battlefield of a 9x9 board. As the sun casts its golden rays, two players lock horns, commanding an army of warriors ready to seize glory or succumb to defeat. In this enthralling contest, cunning strategy and lightning-fast calculations intertwine as players employ intricate maneuvers, deceptive traps, and a symphony of sacrifices to outwit their opponent. Shogi's enigmatic beauty lies in its ability to blend timeless traditions with an endless realm of possibilities, captivating both masters of strategy and those venturing into its mystic realm for the first time.</p>
        </div>
        <img src={promo} alt="Shogi piece promotion" />
      </div>
      <div className="meetup">
        {/* <img src={mapLoc} alt="Map Gif" className="world" /> */}
        <img src={map} alt="Map Gif" />
        <div>
        <h2>Meet Up With Us</h2>
        <p>
          We are still deciding on a permanent location at this time, but in the meantime we're meeting at various locations. Please fill <a href="https://www.bit.ly/phxshogi" target="_blank">
            this form </a> 
            out so you can receive info regarding meetups. We currently meetup once a month.
        </p>
        <p>If you have any suggestions, feel free to send a message via the contacts at the bottom of the page.</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
