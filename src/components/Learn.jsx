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
  const [knowChess, setKnowChess] = useState(null)

  return (
    <main className="learn">
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
          <img src={board} alt="shogi board" className="homeDescImg" />
        </div>
        <div className="knowChess">
        <h2>Do you know how to play Chess?</h2>
        <button onClick={() => setKnowChess(true)}>Yes</button>
        <button onClick={() => setKnowChess(false)}>No</button>
        </div>
        <div  className="pieceMoves">
        <h2>Piece Moves</h2>
        <ul>
          <li>
            <h3>King</h3>
            <p>1 space in any direction</p>
            <img src={king} />
          </li>
          <li>
            <h3>Rook</h3>
            <p>Any # of empty spaces vertically or horizontally</p>
            <img  src={rook} />
            </li>
            <li>
            <h4>Promoted Rook</h4>
            <p>Same as Rook, but also 1 space diagonally</p>
            <img src={dragon} />
          </li>
          <li>
            <h3>Bishop</h3>
            <p>Any # of empty spaces diagonally</p>
            <img src={bishop} />
            </li>
            <li>
            <h4>Promoted Bishop</h4>
            <p>Same as Bishop, but also 1 space up, down, left, or right.</p>
            <img src={horse} />
          </li>
          <li>
            <h3>Gold General</h3>
            <p>1 space up, down, left, right, or forwards diagonally</p>
            <img src={gold} />
          </li>
          <li>
            <h3>Silver General<span className="madeRed">*</span></h3>
            <p>1 space diagonally or up</p>
            <img src={silver} />
          </li>
          <li>
            <h3>Knight<span className="madeRed">*</span></h3>
            <p>Jumps 2 spaces forward and 1 to the side</p>
            <img src={knight} />
          </li>
          <li>
            <h3>Lance<span className="madeRed">*</span></h3>
            <p>Any # of empty spaces forward</p>
            <img src={lance} />
          </li>
          <li>
            <h3>Pawn<span className="madeRed">*</span></h3>
            <p>1 space forward</p>
            <img src={pawn} />
          </li>
          <li>
            <h5>Any piece with <span className="madeRed">*</span> promotes to a Gold General</h5>
            <img src={gold} />
          </li>
        </ul>
        </div>
      </div>
    </main>
  );
};

export default Learn;