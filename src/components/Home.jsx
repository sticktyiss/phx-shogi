import React from "react";
import "./css/Home.css";
import promo from '../images/promo-shogi.gif'

// window.addEventListener('load', () => {
//   console.log('removed css')
//   document.querySelector("div").classList.remove('fade-in')
// })

const Home = () => {
  return (
    <main className="Home">
      <h1>Welcome to Phoenix Shogi</h1>
      <p className="disclaimer">
        *We are a developing group and will have updates to all facets of the
        group as the organization develops.
      </p>
      <div className="comelearn fade-in">
        <div>
        <h2>Come Learn</h2>
        <p>The captivating "Game of Generals," is an ancient Japanese chess variant that breathes life into the battlefield of a 9x9 board. As the sun casts its golden rays, two players lock horns, commanding an army of warriors ready to seize glory or succumb to defeat. In this enthralling contest, cunning strategy and lightning-fast calculations intertwine as players employ intricate maneuvers, deceptive traps, and a symphony of sacrifices to outwit their opponent. </p>
        <p>Each piece embodies the spirit of a legendary warrior, from noble generals to formidable foot soldiers, vying for supremacy in a game where every move echoes with history and whispers tales of unfathomable skill. Shogi's enigmatic beauty lies in its ability to blend timeless traditions with an endless realm of possibilities, captivating both masters of strategy and those venturing into its mystic realm for the first time.</p>
        </div>
        <img src={promo} alt="Shogi piece promotion" />
      </div>
      <div className="meetup">
        <h2>Meet Up With Us</h2>
        <p>
          We are still deciding on a permanent location at this time, but in the meantime please fill <a href="https://www.bit.ly/phxshogi" target="_blank">
            this form</a> out so you can receive info regarding meetups. We currently meetup
          once a month.
        </p>
      </div>
    </main>
  );
};

export default Home;
