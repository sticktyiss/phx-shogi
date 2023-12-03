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
import atamakin from "../images/atamakin.png";
import atamakinNotated from "../images/atamakin-notated.png";

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

const promotionHTML = (
  <section>
    <h2>Promotion</h2>
    <p className="homeDesc">
      Note the area of the board that your pieces and your opponent's pieces occupy at the start of the game. These are your "camps". Anytime one of your pieces <span className="madeRed">moves into, moves through, or moves out of</span> your enemy's camp, it may promote as part of this move. Your opponent can do the same with their pieces in your camp. You do not <em>need</em> to promote a piece unless it will be unable to move on your next turn (e.g. a pawn that reaches the back of the board), although it is usually favorable to do so. To promote a piece, simply flip it over before placing it on the board.
    </p>
    <img className="camps" src={camps} />
  </section>
)

const capturesDropsHTML = (
  <section>
    <h2>Captures and Drops</h2>
    <p className="homeDesc">
      If an opponent's piece occupies a space that your piece can move to, you can <span className="madeRed">capture</span> it as part of your move. If you capture a piece in your opponent's camp, you can also promote on the same turn. Efficient! A piece you've captured is not gone forever, but instead goes into your "hand", usually an area off to the side of the board.
    </p>
    <img className="attack" src={attack} />
    <img className="capture" src={capture} />

    <p className="homeDesc">
      Of course, your opponent can do the same thing. When a promoted piece is captured, you could say the piece is "demoted", as it is placed in hand in its original state. You can never have a promoted piece in hand.
    </p>
    <img className="recapture" src={recapture} />
    
    <p className="homeDesc">
      On your turn, instead of moving, you may "drop" a piece (almost) anywhere on the board, bringing it back to life as your own piece. Our president has affectionately termed this the "zombie rule". 
    </p>
    <img className="drop" src={drop} />
  </section>
)

const illegalMovesHTML = (
  <section>
    <h2>Illegal Moves</h2>
    <p className="homeDesc">
      I did mention you could drop a piece <span className="madeRed">almost</span> anywhere on your turn. There are some exceptions, as well as some other moves that you are not allowed to make.
      <br></br>
      <ul className="illegalMoves">
        <li>Dropping a piece where it cannot move</li>
        <p>
          Remember that a piece that has no moves left must promote, and in order to promote, you must make a move. If you drop 
          a lance or pawn on the back rank (or a knight on either of the back two ranks), it would have no moves, as these pieces cannot 
          move backwards until promoted, and cannot promote until moving. To avoid this paradox, you're simply not allowed to put a piece 
          where it can't (and never will be able to) move.
        </p>

        <li>Doubled Pawns, "Nifu"</li>
        <p>
          Ah, the bane of Shogi players everywhere. Pawns must remain in their own lane. Possibly to stop you from creating an impenetrable wall of vertical pawns, or to prevent you from getting in your own way, you cannot place a pawn anywhere in the same column as another pawn. If you do this in a tournament, you lose the game! One thing to note is a promoted pawn, a "tokin", has ascended its status as a mere pawn, and does not count for the purposes of this rule, so you can totally make an impenetrable cluster of tokins.
        </p>

        <li>Checkmate with a dropped pawn, "uchi fu tsumi"</li>
        <p>
          Perhaps because there are simply so many of them, you cannot drop a pawn to checkmate a king. Any other piece can be dropped for a checkmate, and you can move a pawn to deliver a mate, but you're likely to have a good few pawns in hand during most games, and you can't use a drop to mate with one.
        </p>
        
        <li>Leaving the king in check (or moving it into check)</li>
        <p>
          This should come as no surprise; just like in chess, you cannot endanger your king by leaving it open for capture on your opponent's next turn. You can't move into check, and if you are in check, you must use your turn to escape it. The one difference is in Shogi you can block with pieces in your hand instead of pieces on the board, so a material advantage can also mean a big defensive advantage.
        </p>
      </ul>
    </p>
  </section>
)

const chessPlayerPieces = (
  <div>
    <h2>The Pieces</h2>
    <p className="homeDesc">
      Shogi has 8 types of pieces (called "koma" 駒) with unique move sets, and 6 of those pieces can be "promoted", giving them an altered moveset (more on promotion later). Note that while many have names similar to chess pieces,<span className="madeRed"> only the king, bishop, and rook move the same</span>. Shogi pawns move and capture forward, and shogi knights have only 2 possible moves, instead of 8.
      The Pieces are:
    </p>
  </div>
)

const chessPlayerHTML = (
  <div className="knowChess">
    <h2>Shogi for Chess Players</h2>
    <section className="learnNav">
      <button className="learnNavBtn" id="chess1">1</button>
      <button className="learnNavBtn" id="chess2">2</button>
      <button className="learnNavBtn" id="chess3">3</button>
      <button className="learnNavBtn" id="chess4">4</button>
      <button className="learnNavBtn" id="chess5">5</button>
    </section>
    <p className="homeDesc">
      Shogi and chess are such similar games that many refer to Shogi as "Japanese Chess." There are, however, some key differences that make the two quite distinct in both gameplay and strategy. Shogi is most similar to a variant of chess called "Crazy House" (a two player version of Bug House), but even knowing this, the pieces take some getting used to.
    </p>
    <br></br>
    {chessPlayerPieces}
    
    {/* <button></button> */}
    {/* Use some kind of toggle here later */}
    <section className="activePiece">
      {/* {activePieceDescription} */}
      {pieceMovesHTML}
    </section>

    <h2>Setting the Board</h2>
    <p className="homeDesc">
      Below you'll see how to set up a standard Shogi game. You have 9 pawns in front, in the middle you have your bishop on the left and your rook on the right, and on the back row, starting in the center and moving out, you have your king, then your gold generals, silver generals, knights, and lances. Your opponent has the same, rotated 180 degrees. Note a key difference here: <span className="madeRed">a Shogi board is 9x9, meaning your bishops directly oppose one another at the start of the game</span>. If the board were checkered, they would be bishops of the same "color".
    </p>
    <img className="board" src={setboard} />

    <h2>Who goes first?</h2>
    <p className="homeDesc">
      You'll note there are no colored pieces in Shogi. Instead, the direction a piece is facing inidcates whose piece it is. The first player to make a move is called "Sente", and the player that moves second is called "Gote". Some books and notation will refer to sente as "black" and gote as "white", which is the opposite of the chess move order, so I tend to prefer using the Japanese terms to avoid confusion.
    </p>

    {promotionHTML}

    {capturesDropsHTML}

    <section>
      <h2>Winning the Game</h2>
      <p className="homeDesc">
        As in chess, you win the game by putting the enemy king in <span className="madeRed">checkmate</span>. This is called "tsumi"
        or "tsume" in Japanese, and just as in chess it is a position where the king is being attacked and cannot move, and is easier 
        to do when the king is forced into a corner. Unlike chess, the most common way of checkmating is not by manuevering your pieces 
        around, but rather by <span className="madeRed">dropping</span> a piece directly next to the king! Yes, you can drop pieces for 
        checks and even for a mate. You can also drop a piece to block a check, which is why you almost always need to get in up close and 
        personal to deliver the final blow. A common mate, called "atamakin" or "a gold to the head", is shown below.
      </p>
      <img className="atamkin" src={atamakin} />

      <p className="homeDesc">
        Note that the gold at the king's "head" is attacking the king and every space around it, and the king cannot take the gold 
        because it is protected by another piece. You might have thought it odd that so many pieces move the same as a gold general 
        when promoted, but you can see here just how deadly a gold so close to the king can be!
      </p>
      <img className="atamkinNotated" src={atamakinNotated} />
    </section>

    {illegalMovesHTML}

    <h2>Manners</h2>
    <p className="homeDesc">
      Shogi, perhaps more than other board games, places a heavy emphasis on etiquette, or sportsmanship. In much the way that you might shake hands before a chess match, a Shogi game does not begin until opponents greet each other with a head bow and "onegaishimasu" (similar to saying "good luck"), and does not truly end until one player says "makemashita" ("I have lost"). After the game is over, thank your opponent with another bow and "arigatou gozaimasu" ("Thank you [for the game]"). After all, win or lose, without our opponent, we would not get to enjoy such a fun and exciting game.
    </p>
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

    {promotionHTML}
    
    {capturesDropsHTML}

    <h2>Winning the Game</h2>
    <p className="homeDesc">
      You win a game of Shogi by putting the enemy king in <span className="madeRed">checkmate</span>. This is called "tsumi"
      or "tsume" in Japanese, a position where the king is being attacked and cannot move, and it is easier to reach by forcing the king 
      into a corner. The most common way of checkmating is not by manuevering your pieces 
      around, but rather by <span className="madeRed">dropping</span> a piece directly next to the king! Yes, you can drop pieces for 
      checks and even for a mate. You can also drop a piece to block a check, which is why you almost always need to get in up close and 
      personal to deliver the final blow. A common mate, called "atamakin" or "a gold to the head", is shown below.
    </p>
    <img className="atamkin" src={atamakin} />

    <p className="homeDesc">
      Note that the gold at the king's "head" is attacking the king and every space around it, and the king cannot take the gold 
      because it is protected by another piece. You might have thought it odd that so many pieces move the same as a gold general 
      when promoted, but you can see here just how deadly a gold so close to the king can be!
    </p>
    <img className="atamkinNotated" src={atamakinNotated} />

    <h2>Illegal Moves</h2>
    <p className="homeDesc">
      I did mention you could drop a piece <span className="madeRed">almost</span> anywhere on your turn. There are some exceptions, as well as some other moves that you are not allowed to make.
      <br></br>
        <ul className="illegalMoves">
          <li>Dropping a piece where it cannot move</li>
          <p>
            Remember that a piece that has no moves left must promote, and in order to promote, you must make a move. If you drop 
            a lance or pawn on the back rank (or a knight on either of the back two ranks), it would have no moves, as these pieces cannot 
            move backwards until promoted, and cannot promote until moving. To avoid this paradox, you're simply not allowed to put a piece 
            where it can't (and never will be able to) move.
          </p>

          <li>Doubled Pawns, "Nifu"</li>
          <p>
            Ah, the bane of Shogi players everywhere. Pawns must remain in their own lane. Possibly to stop you from creating an impenetrable wall of vertical pawns, or to prevent you from getting in your own way, you cannot place a pawn anywhere in the same column as another pawn. If you do this in a tournament, you lose the game! One thing to note is a promoted pawn, a "tokin", has ascended its status as a mere pawn, and does not count for the purposes of this rule, so you can totally make an impenetrable cluster of tokins.
          </p>

          <li>Checkmate with a dropped pawn, "uchi fu tsumi"</li>
          <p>
            Perhaps because there are simply so many of them, you cannot drop a pawn to checkmate a king. Any other piece can be dropped for a checkmate, and you can move a pawn to deliver a mate, but you're likely to have a good few pawns in hand during most games, and you can't use a drop to mate with one.
          </p>
          
          <li>Leaving the king in check (or moving it into check)</li>
          <p>
            Protect your king! If your king can be captured by your opponent on their next turn, you must do something to stop them. Similarly, you cannot endanger your king by moving it to a square that is being attacked by an enemy piece. If you lose the king you lose the game, even if you have have an amazing move ready. When your king is being attacked, it is in "check". You can get out of check by capturing the attacking piece (if there's only one), moving the king out of the way, moving a piece to block the attacker, or dropping a piece to block the attacker. If you cannot escape the attack, you are in "checkmate", and have lost the game. 
          </p>
        </ul>
    </p>

    <h2>Manners</h2>
    <p className="homeDesc">
      Shogi, perhaps more than other board games, places a heavy emphasis on etiquette, or sportsmanship. A Shogi game does not begin until opponents greet each other with a head bow and "onegaishimasu" (similar to saying "good luck"), and does not truly end until one player says "makemashita" ("I have lost"). After the game is over, thank your opponent with another bow and "arigatou gozaimasu" ("Thank you [for the game]"). After all, win or lose, without our opponent, we would not get to enjoy such a fun and exciting game.
    </p>
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

        
        <p className="homeDesc">
          We highly recommend checking out <a href="https://lishogi.org/learn">Lishogi's Interactive Intro to Shogi</a> as a great way to learn the basic rules, but if you'd prefer a written guide, answer the all-important question below to get started.
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
