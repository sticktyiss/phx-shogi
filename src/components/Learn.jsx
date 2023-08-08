import React from "react";
// import { useState } from "react";
import ReactDOM from "react-dom";

import "./css/Learn.css";
import board from "../images/shogiboard.jpg";
import setboard from "../images/setboard.png";
import camps from "../images/camps.png";
import attack from "../images/attack.png";
import capture from "../images/capture.png";
import recapture from "../images/recapture.png";
import drop from "../images/drop.png";

import kingmoves from "../images/pieces/moves/king.png";
import rookmoves from "../images/pieces/moves/rook.png";
import dragonmoves from "../images/pieces/moves/dragon.png";
import bishopmoves from "../images/pieces/moves/bishop.png";
import horsemoves from "../images/pieces/moves/horse.png";
import goldmoves from "../images/pieces/moves/gold.png";
import silvermoves from "../images/pieces/moves/silver.png";
import knightmoves from "../images/pieces/moves/knight.png";
import lancemoves from "../images/pieces/moves/lance.png";
import pawnmoves from "../images/pieces/moves/pawn.png";

import king from "../images/pieces/0GY.svg";
import rook from "../images/pieces/0HI.svg";
import dragon from "../images/pieces/0RY.svg";
import bishop from "../images/pieces/0KA.svg";
import horse from "../images/pieces/0UM.svg";
import gold from "../images/pieces/0KI.svg";
import silver from "../images/pieces/0GI.svg";
import promosilver from "../images/pieces/0NG.svg";
import knight from "../images/pieces/0KE.svg";
import promoknight from "../images/pieces/0NK.svg";
import lance from "../images/pieces/0KY.svg";
import promolance from "../images/pieces/0NK.svg";
import pawn from "../images/pieces/0FU.svg";
import tokin from "../images/pieces/0TO.svg";

const pieceMovesHTML = (
  <div className="pieceMoves">
    <ul>
      <li>
        <h3>King</h3>
        <p>1 space in any direction</p>
        <img className="moveset" src={kingmoves} />
        <img className="piece" src={king} />
      </li>
      <li>
        <h3>Rook</h3>
        <p>Any # of empty spaces vertically or horizontally</p>
        <img className="moveset" src={rookmoves} />
        <img className="piece" src={rook} />
      </li>
      <li>
        <h4>Promoted Rook (Dragon)</h4>
        <p>Same as Rook, but also 1 space diagonally</p>
        <img className="moveset" src={dragonmoves} />
        <img className="piece" src={dragon} />
      </li>
      <li>
        <h3>Bishop</h3>
        <p>Any # of empty spaces diagonally</p>
        <img className="moveset" src={bishopmoves} />
        <img className="piece" src={bishop} />
      </li>
      <li>
        <h4>Promoted Bishop (Horse)</h4>
        <p>Same as Bishop, but also 1 space up, down, left, or right.</p>
        <img className="moveset" src={horsemoves} />
        <img className="piece" src={horse} />
      </li>
      <li>
        <h3>Gold General</h3>
        <p>1 space up, down, left, right, or forwards diagonally</p>
        <img className="moveset" src={goldmoves} />
        <img className="piece" src={gold} />
      </li>
      <li>
        <h3>
          Silver General
        </h3>
        <p>1 space diagonally or up</p>
        <img className="moveset" src={silvermoves} />
        <img className="piece" src={silver} />
      </li>
      <li>
        <h3>
          Promoted Silver
        </h3>
        <p>Same as a gold</p>
        <img className="moveset" src={goldmoves} />
        <img className="piece" src={promosilver} />
      </li>
      <li>
        <h3>
          Knight
        </h3>
        <p>Jumps 2 spaces forward and 1 to the side</p>
        <img className="moveset" src={knightmoves} />
        <img className="piece back" src={knight} />
      </li>
      <li>
        <h3>
          Promoted Knight
        </h3>
        <p>Same as a gold</p>
        <img className="moveset" src={goldmoves} />
        <img className="piece" src={promoknight} />
      </li>
      <li>
        <h3>
          Lance
        </h3>
        <p>Any # of empty spaces forward</p>
        <img className="moveset" src={lancemoves} />
        <img className="piece back" src={lance} />
      </li>
      <li>
        <h3>
          Promoted Lance
        </h3>
        <p>Same as a gold</p>
        <img className="moveset" src={goldmoves} />
        <img className="piece" src={promolance} />
      </li>
      <li>
        <h3>
          Pawn
        </h3>
        <p>1 space forward</p>
        <img className="moveset" src={pawnmoves} />
        <img className="piece" src={pawn} />
      </li>
      <li>
        <h3>
          Promoted Pawn (Tokin)
        </h3>
        <p>Same as a gold</p>
        <img className="moveset" src={goldmoves} />
        <img className="piece" src={tokin} />
      </li>
    </ul>
  </div>
);

const chessPlayerHTML = (
  <div className="knowChess">
    <h2>Shogi for Chess Players</h2>
    <p className="homeDesc">
      Shogi and chess are such similar games that many refer to Shogi as "Japanese Chess." 
      There are, however, some key differences that make the two quite distinct in both gameplay and strategy.
      Shogi is most similar to a variant of chess called "Crazy House" (a two player version of Bug House), 
      but even knowing this, the pieces take some getting used to.
    </p>
    <br></br>

    <h2>The Pieces</h2>
    <p className="homeDesc">
      Shogi has 8 types of pieces (called "koma" 駒) 
      with unique move sets, and 6 of those pieces can be "promoted", giving them an altered moveset (more on promotion later). 
      Note that while many have names similar to chess pieces, <span className="madeRed">
      only the king, bishop, and rook move the same</span>.
      Shogi pawns move and capture forward, and shogi knights have only 2 possible moves, instead of 8.
      The Pieces are:
    </p>
    {/* <button></button> */}
    {/* Use some kind of toggle here later */}
    <section className="activePiece">
      {/* {activePieceDescription} */}
      {pieceMovesHTML}
    </section>

    <h2>Setting the Board</h2>
    <p className="homeDesc">
      Below you'll see how to set up a standard Shogi game. You have 9 pawns in front, in the middle you have 
      your bishop on the left and your rook on the right, and on the back row, starting in the center and moving out,
      you have your king, then your gold generals, silver generals, knights, and lances. Your opponent has the same, 
      rotated 180 degrees. Note a key difference here: <span className="madeRed">a Shogi board is 9x9, meaning your bishops 
      directly oppose one another at the start of the game</span>. If the board were checkered, they would be bishops of the 
      same "color".
    </p>
    <img className="board" src={setboard} />

    <h2>Promotion</h2>
    <p className="homeDesc">
      Note the area of the board that your pieces and your opponent's pieces occupy at the start of the game. These 
      are your "camps". Anytime one of your pieces <span className="madeRed">moves into, moves through, or moves out of</span> 
      your enemy's camp, it may promote as part of this move. Your opponent can do the same with their pieces in your camp. You do 
      not <em>need</em> to promote a piece unless it will be unable to move on your next turn (e.g. a pawn that reaches the back 
      of the board), although it is usually favorable to do so. To promote a piece, simply flip it over before placing it on the board.
    </p>
    <img className="camps" src={camps} />

    <h2>Captures and Drops</h2>
    <p className="homeDesc">
      If an opponent's piece occupies a space that your piece can move to, you can <span className="madeRed">capture</span> it 
      as part of your move. If you capture a piece in your opponent's camp, you can also promote on the same turn. Efficient!
      A piece you've captured is not gone forever, but instead goes into your "hand", usually an area off to the side of the board.
    </p>
    <img className="attack" src={attack} />
    <img className="capture" src={capture} />

    <p className="homeDesc">
      Of course, your opponent can do the same thing. When a promoted piece is captured, you could say the piece is "demoted", as 
      it is placed in hand in its original state. You can never have a promoted piece in hand.
    </p>
    <img className="recapture" src={recapture} />
    
    <p className="homeDesc">
      On your turn, instead of moving, you may "drop" a piece (almost) anywhere on the board, bringing it back to life as your own piece. 
      Our president has affectionately termed this the "zombie rule". 
    </p>
    <img className="drop" src={drop} />

  </div>
);

const noChessHTML = (
  <div className="knowChess">
    <h2>Shogi for Beginners</h2>
    <p className="homeDesc">
      You're definitely starting on the more exciting board game! While knowing chess may give you 
      tactics and tricks to use, it can also be hard to "unlearn" some common chess techniques that
      don't work very well in Shogi, so don't worry too much either way.
    </p>

    <h2>The Basics</h2>
    <p className="homeDesc">
      Shogi is a game played by two people who sit on opposite ends of a board. The first player to make a move is called 
      "Sente", and the player that moves second is called "Gote". On each of their turns, a player may move one of
      the pieces they have on the board, or "drop" one of the pieces from their "hand" onto the board. The goal of the game is to put the 
      opponent's king into "tsumi" (checkmate). More details on each of these rules below.
    </p>

    <h2>The Pieces</h2>
    <p className="homeDesc">
      Shogi has 8 types of pieces (called "koma" 駒) 
      with unique move sets, and 6 of those pieces can be "promoted", giving them an altered moveset (more on promotion later). 
      They are:
    </p>
    {/* <button></button> */}
    {/* Use some kind of toggle here later */}
    <section className="activePiece">
      {/* {activePieceDescription} */}
      {pieceMovesHTML}
    </section>

    <h2>Setting the Board</h2>
    <p className="homeDesc">
      Below you'll see how to set up a standard Shogi game. You have 9 pawns in front, in the middle you have 
      your bishop on the left and your rook on the right, and on the back row, starting in the center and moving out,
      you have your king, then your gold generals, silver generals, knights, and lances. Your opponent has the same, 
      rotated 180 degrees.
    </p>
    <img className="board" src={setboard} />

    <h2>Promotion</h2>
    <p className="homeDesc">
      Note the area of the board that your pieces and your opponent's pieces occupy at the start of the game. These 
      are your "camps". Anytime one of your pieces <span className="madeRed">moves into, moves through, or moves out of</span> 
      your enemy's camp, it may promote as part of this move. Your opponent can do the same with their pieces in your camp. You do 
      not <em>need</em> to promote a piece unless it will be unable to move on your next turn (e.g. a pawn that reaches the back 
      of the board), although it is usually favorable to do so. To promote a piece, simply flip it over before placing it on the board.
    </p>
    <img className="camps" src={camps} />

    <h2>Captures and Drops</h2>
    <p className="homeDesc">
      If an opponent's piece occupies a space that your piece can move to, you can <span className="madeRed">capture</span> it 
      as part of your move. If you capture a piece in your opponent's camp, you can also promote on the same turn. Efficient!
      A piece you've captured is not gone forever, but instead goes into your "hand", usually an area off to the side of the board.
    </p>
    <img className="attack" src={attack} />
    <img className="capture" src={capture} />

    <p className="homeDesc">
      Of course, your opponent can do the same thing. When a promoted piece is captured, you could say the piece is "demoted", as 
      it is placed in hand in its original state. You can never have a promoted piece in hand.
    </p>
    <img className="recapture" src={recapture} />
    
    <p className="homeDesc">
      On your turn, instead of moving, you may "drop" a piece (almost) anywhere on the board, bringing it back to life as your own piece. 
      Our president has affectionately termed this the "zombie rule". 
    </p>
    <img className="drop" src={drop} />

    <h2></h2>

  </div>
);

function loadRules(chessPlayer) {
  const rules = ReactDOM.createRoot(
    document.getElementById('rules')
  );

  if(chessPlayer === true) {
    rules.render(chessPlayerHTML);
  } else {
    rules.render(noChessHTML);
  }
}

const Learn = () => {
  // const [knowChess, setKnowChess] = useState(null);

  return (
    <main className="learn">
      <div>
        <h1>
          What is Shogi<span className="madeRed">?</span>
        </h1>
        <img src={board} alt="shogi board" className="homeDescImg" />
        <p className="homeDesc">
          The captivating "<span className="madeRed">Game of Generals</span>,"
          is an ancient Japanese chess variant that breathes life into the
          battlefield of a <span className="madeRed">9x9 board</span>. As the
          sun casts its golden rays, two players lock horns, commanding an army
          of warriors ready to seize glory or succumb to defeat. In this
          enthralling contest, cunning strategy and lightning-fast calculations
          intertwine as players employ intricate maneuvers, deceptive traps, and
          a symphony of sacrifices to outwit their opponent. Each piece embodies
          the spirit of a legendary warrior, from noble generals to formidable
          foot soldiers, vying for <span className="madeRed">supremacy </span>
          in a game where every move echoes with history and whispers tales of
          unfathomable skill. Shogi's enigmatic beauty lies in its ability to
          blend timeless traditions with an endless realm of possibilities,
          captivating both masters of strategy and those venturing into its
          mystic realm for the first time.
        </p>
        <section id="rules">
          <div className="knowChess">
            <h2>Do you know how to play Chess?</h2>
            <button onClick={() => loadRules(true)}>Yes</button>
            <button onClick={() => loadRules(false)}>No</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Learn;
