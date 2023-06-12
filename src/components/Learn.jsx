import React from "react";
import { useState } from "react";
import "./css/Learn.css";
import board from "../images/shogiboard.jpg";
import king from '../images/pieces/King.png';
import rook from '../images/pieces/Rook.png';
import dragon from '../images/pieces/Dragon.png';
import bishop from '../images/pieces/Bishop.png';
import horse from '../images/pieces/Horse.png';
import gold from '../images/pieces/Gold.png';
import silver from '../images/pieces/Silver.png';
import knight from '../images/pieces/Knight.png';
import lance from '../images/pieces/Lance.png';
import pawn from '../images/pieces/Pawn.png';

const Learn = () => {
  const [knowChess, setKnowChess] = useState()

  return (
    <main id="learn">
      <div>
          <h1>What is Shogi<span className="madeRed">?</span></h1>
        <div className="homeDesc">
          <p>
            The captivating "<span className="madeRed">Game of Generals</span>," is an ancient Japanese chess
            variant that breathes life into the battlefield of a <span className="madeRed">9x9 board</span>. As
            the sun casts its golden rays, two players lock horns, commanding an
            army of warriors ready to seize glory or succumb to defeat. In this
            enthralling contest, cunning strategy and lightning-fast
            calculations intertwine as players employ intricate maneuvers,
            deceptive traps, and a symphony of sacrifices to outwit their
            opponent. Each piece embodies the spirit of a legendary warrior,
            from noble generals to formidable foot soldiers, vying for <span className='madeRed'>supremacy </span>
            in a game where every move echoes with history and whispers tales of
            unfathomable skill. Shogi's enigmatic beauty lies in its ability to
            blend timeless traditions with an endless realm of possibilities,
            captivating both masters of strategy and those venturing into its
            mystic realm for the first time.
          </p>
          <img src={board} alt="shogi board" />
        </div>
        <div className="knowChess">
        <h2>Do you Know Chess?</h2>
        <button onClick={() => setKnowChess(true)}>Yes</button>
        <button onClick={() => setKnowChess(false)}>No</button>
        </div>
        <ul className="pieceMoves">
          <li>
            <h3>King</h3>
            <img src={king} />
          </li>
          <li>
            <h3>Rook</h3>
            <img  src={rook} />
            <h4>Promoted Rook "Dragon"</h4>
            <img src={dragon} />
          </li>
          <li>
            <h3>Bishop</h3>
            <img src={bishop} />
            <h4>Promoted Bishop "Horse"</h4>
            <img src={horse} />
          </li>
          <li>
            <h3>Gold General</h3>
            <img src={gold} />
          </li>
          <li>
            <h3>Silver General</h3>
            <img src={silver} />
          </li>
          <li>
            <h3>Knight</h3>
            <img src={knight} />
          </li>
          <li>
            <h3>Lance</h3>
            <img src={lance} />
          </li>
          <li>
            <h3>Pawn</h3>
            <img src={pawn} />
          </li>
        </ul>
        <p>
          Discover the ancient art of Shogi, a game that has enthralled
          strategists for centuries. Whether you're a seasoned player seeking
          new challenges or a curious beginner eager to learn, our club offers a
          vibrant community dedicated to the pursuit of Shogi mastery.
        </p>
      </div>
    </main>
  );
};

export default Learn;
