import React from "react";
// import { useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'; 

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

import oushou from "../images/pieces/oushou.png";
// import gyokushou from "../images/pieces/gyokushou.png"
import king_moves from "../images/pieces/king_moves.png"

import hisha from "../images/pieces/hisha.png"
import rook_moves from "../images/pieces/rook_moves.png"
import ryuu from "../images/pieces/ryuuou.png"
import dragon_moves from "../images/pieces/dragon_moves.png"

import kaku from "../images/pieces/kakugyou.png"
import bishop_moves from "../images/pieces/bishop_moves.png"
import uma from "../images/pieces/ryuuma.png"
import horse_moves from "../images/pieces/horse_moves.png"

import kin from "../images/pieces/kinshou.png"
import gold_moves from "../images/pieces/gold_moves.png"

import gin from "../images/pieces/ginshou.png"
import silver_moves from "../images/pieces/silver_moves.png"
import narigin from "../images/pieces/narigin.png"
import narigin_moves from "../images/pieces/promoted_silver_moves.png"

import kei from "../images/pieces/keima.png"
import knight_moves from "../images/pieces/knight_moves.png"
import narikei from "../images/pieces/narikei.png"
import narikei_moves from "../images/pieces/promoted_knight_moves.png"

import kyou from "../images/pieces/kyousha.png"
import lance_moves from "../images/pieces/lance_moves.png"
import narikyou from "../images/pieces/narikyou.png"
import narikyou_moves from "../images/pieces/promoted_lance_moves.png"

import fu from "../images/pieces/fuhyou.png"
import pawn_moves from "../images/pieces/pawn_moves.png"
import tokin from "../images/pieces/tokin.png"
import tokin_moves from "../images/pieces/tokin_moves.png"

let isChessPlayer;

let activeRule = null;
let activePiece = null;

function loadKing() {
  activePiece = createRoot(
    document.getElementById('activePiece')
  );

  activePiece.render(
    <section className="pieceDesc">
      <h3>The King <span className="japaneseText">王将・玉将</span></h3>
      <img className="pieceImg" src={oushou}></img>
      <img className="movementImg" src={king_moves}></img>
      {
        isChessPlayer ? 
          <p>The ou-shou / gyoku-shou (abbreviated "gyoku") is <em>the most important piece in the game</em>. When one side's king is lost, the game is lost with it, so guard yours well! The king can move one space in any direction (the same as a chess king), and does not promote. The "ou-shou" king is traditionally given to the higher-rated player, while the "gyoku-shou" king goes to the lower-rated player, regardless of which player moves first. As 玉 can be used to describe jewelry, it is sometimes referred to as the "Jewel" or "Jeweled" King in English. </p> 
        : 
          <p>The ou-shou / gyoku-shou (abbreviated "gyoku") is <em>the most important piece in the game</em>. When one side's king is lost, the game is lost with it, so guard yours well! The king can move one space in any direction, and does not promote. The "ou-shou" king is traditionally given to the higher-rated player, while the "gyoku-shou" king goes to the lower-rated player, regardless of which player moves first. As 玉 can be used to describe jewelry, it is sometimes referred to as the "Jewel" or "Jeweled" King in English. </p>
      }
    </section>
  ) 
}

function loadDragon() {
  if(activePiece === null) {
    activePiece = createRoot(
      document.getElementById('activePiece')
    );
  }

  activePiece.render(
    <section className="pieceDesc">
      <h3>Dragon <span className="japaneseText">龍王</span></h3>
      <img className="pieceImg" src={ryuu}></img>
      <img className="movementImg" src={dragon_moves}></img>
      <p>(ryuu-ou, abbreviated as "ryuu")<br></br>
        Sometimes abbreviated as <span className="japaneseText">竜</span> (an easier-to-read kanji for "dragon"), the dragon is the strongest offensive piece. When the dragon closes in on the king, the end is near. A dragon can move either as a rook or as a king (any number of spaces forward, backward, or sideways OR one space diagonally).
      </p>
    </section>
  )
}

function loadRook() {
  activePiece = createRoot(
    document.getElementById('activePiece')
  );

  activePiece.render(
    <section className="pieceDesc">
      <h3>The Rook <span className="japaneseText">飛車</span></h3>
      <img className="pieceImg" src={hisha}></img>
      <img className="movementImg" src={rook_moves}></img>
      <p>("hi-sha" pronounced "hee-shah", abbreviated as "sha", literally "flying chariot")<br></br> 
      A powerful long-range attacker, the rook often dictates the speed and direction of the game. Promoting your rook is considered a minor victory. The rook can move any number of spaces forward, backward, or sideways (same as a chess rook).
      </p>
      <br></br>
      <button onClick={() => loadDragon()}>Promote!</button>
    </section>
  )
}

function loadHorse() {
  if(activePiece === null) {
    activePiece = createRoot(
      document.getElementById('activePiece')
    );
  }

  activePiece.render(
    <section className="pieceDesc">
      <h3>Horse <span className="japaneseText">龍馬</span></h3>
      <img className="pieceImg" src={uma}></img>
      <img className="movementImg" src={horse_moves}></img>
      <p>(ryuu-uma, abbreviated as "uma")
        Sometimes abbreviated as <span className="japaneseText">馬</span> (an easier-to-read kanji for "horse"), the horse is second only to the dragon, and can be even more deadly in many positions. Unlike the dragon, the horse prefers to attack from a distance. The hose can move either as a bishop or as a king (any number of spaces diagonally OR one space forward, backward, or sideways).
      </p>
    </section>
  )
}

function loadBishop() {
  activePiece = createRoot(
    document.getElementById('activePiece')
  );

  activePiece.render(
    <section className="pieceDesc">
      <h3>The Bishop <span className="japaneseText">角行</span></h3>
      <img className="pieceImg" src={kaku}></img>
      <img className="movementImg" src={bishop_moves}></img>
      <p>("kaku-gyou", abbreviated as "kaku")<br></br> 
      Another valuable long-range piece, the bishop can be manuevered around the board a bit more easily than the rook, and is considered stronger than the rook during the start of the game. A bishop can move any number of spaces in diagonally (same as a chess bishop).
      </p>
      <br></br>
      <button onClick={() => loadHorse()}>Promote!</button>
    </section>
  )
}

function loadGold() {
  activePiece = createRoot(
    document.getElementById('activePiece')
  );

  activePiece.render(
    <section className="pieceDesc">
      <h3>Gold General <span className="japaneseText">金将</span></h3>
      <img className="pieceImg" src={kin}></img>
      <img className="movementImg" src={gold_moves}></img>
      <p>(kin-shou, abbreviated as "kin")<br></br>
        A gold general (or simply "a gold") is a valuable defender, and typically works well when kept near the king. A gold general <span className="madeRed">in hand</span> is even better and, used effectively, can win the game! A gold general can move one space in any direction except diagonally backwards, similar to a king but weak at its flanks. Gold generals are the only pieces other than the king that cannot promote.
      </p>
    </section>
  )
}

function loadNarigin() {
  if(activePiece === null) {
    activePiece = createRoot(
      document.getElementById('activePiece')
    );
  }

  activePiece.render(
    <section className="pieceDesc">
      <h3>Promoted Silver <span className="japaneseText">成銀</span></h3>
      <img className="pieceImg" src={narigin}></img>
      <img className="movementImg" src={narigin_moves}></img>
      <p>(nari-gin)<br></br>
        The promoted silver moves the same as a gold general and has the same strengths and weaknesses as a gold. While this is usually an upgrade, it can limit mobility, and it might be good to leave your silver unpromoted until the time is right.
      </p>
    </section>
  )
}

function loadSilver() {
  activePiece = createRoot(
    document.getElementById('activePiece')
  );

  activePiece.render(
    <section className="pieceDesc">
      <h3>Silver General <span className="japaneseText">銀将</span></h3>
      <img className="pieceImg" src={gin}></img>
      <img className="movementImg" src={silver_moves}></img>
      <p>(gin-shou, abbreviated as "gin")<br></br>
        In contrast to the gold generals, silver generals (or simply silvers) are more effective offensively, but still often play a role in defense. Typically, one silver stays behind to protect the king while another leads the charge into enemy territory. A silver can move one space on any diagonal and directly forward, but not sideways nor directly backward, a kind of "inverted gold". 
      </p>
      <br></br>
      <button onClick={() => loadNarigin()}>Promote!</button>
    </section>
  )
}

function loadTokin() {
  if(activePiece === null) {
    activePiece = createRoot(
      document.getElementById('activePiece')
    );
  }

  activePiece.render(
    <section className="pieceDesc">
      <h3>Promoted Pawn (Tokin)<span className="japaneseText">と金</span></h3>
      <img className="pieceImg" src={tokin}></img>
      <img className="movementImg" src={tokin_moves}></img>
      <p>Like a silver, a pawn moves the same as a gold general when promoted. However, for the pawn this is always an upgrade; the tokin can still move like a pawn and has five <em>more</em> spaces it can go. When your opponent captures a gold or a promoted general, they gain a powerful piece, but if they capture a tokin, they gain a mere pawn, highlighting a key strength of promoted pieces.
      </p>
    </section>
  )
}

function loadPawn() {
  activePiece = createRoot(
    document.getElementById('activePiece')
  );

  activePiece.render(
    <section className="pieceDesc">
      <h3>Pawn <span className="japaneseText">歩兵</span></h3>
      <img className="pieceImg" src={fu}></img>
      <img className="movementImg" src={pawn_moves}></img>
      <p>(fu-hyou, "fu" for short)
      The humble pawn ("foot soldier") moves just one space forward at a time. A pawn in hand is very versatile, and works well both offensively and defensively, as exemplified in the proverb: 一歩千金 (i-ppu sen kin) "One pawn; a thousand golds".
      </p>
      <br></br>
      <button onClick={() => loadTokin()}>Promote!</button>
    </section>
  )
}

function loadNarikyou() {
  if(activePiece === null) {
    activePiece = createRoot(
      document.getElementById('activePiece')
    );
  }

  activePiece.render(
    <section className="pieceDesc">
      <h3>Promoted Lance <span className="japaneseText">成香</span></h3>
      <img className="pieceImg" src={narikyou}></img>
      <img className="movementImg" src={narikyou_moves}></img>
      <p>(nari-kyou)<br></br>
        Just like silvers and pawns, when a lance promotes, it moves the same as a gold. A promoted lance can move around more easily than an unpromoted one, so unless you need to keep the range, it's best to promote.
      </p>
    </section>
  )
}

function loadLance() {
  activePiece = createRoot(
    document.getElementById('activePiece')
  );

  activePiece.render(
    <section className="pieceDesc">
      <h3>Lance <span className="japaneseText">香車</span></h3>
      <img className="pieceImg" src={kyou}></img>
      <img className="movementImg" src={lance_moves}></img>
      <p>(kyou-sha, abbreviated as "kyou")<br></br>
        A lance is, in a way, like a super pawn! It can move any number of spaces forward, instead of just the one. A lance normally works best as a support, guarding your pieces from the back rank, ready to spear forward when an enemy piece wanders into its sights.
      </p>
      <br></br>
      <button onClick={() => loadNarikyou()}>Promote!</button>
    </section>
  )
}

function loadNarikei() {
  if(activePiece === null) {
    activePiece = createRoot(
      document.getElementById('activePiece')
    );
  }

  activePiece.render(
    <section className="pieceDesc">
      <h3>Promoted Knight <span className="japaneseText">成桂</span></h3>
      <img className="pieceImg" src={narikei}></img>
      <img className="movementImg" src={narikei_moves}></img>
      <p>(nari-kei)<br></br>
        The promoted knight moves the same as, you guessed it, a gold general. As with the lance, this usually means an upgrade, but the unique ability to jump over other pieces gives an unpromoted knight a special attack you may want to keep. Choose wisely. 
      </p>
    </section>
  )
}

function loadKnight() {
  activePiece = createRoot(
    document.getElementById('activePiece')
  );

  activePiece.render(
    <section className="pieceDesc">
      <h3>Knight <span className="japaneseText">桂馬</span></h3>
      <img className="pieceImg" src={kei}></img>
      <img className="movementImg" src={knight_moves}></img>
      <p>(kei-ma, abbreviated as "kei")<br></br>
        Knights are the only pieces that can <span className="madeRed">jump over other pieces</span>, which can make them very tricky attackers. Unlike chess knights, however, they have only two possible moves. Because of this, "a knight that jumps too high falls prey to a pawn". Knights move up one and diagonally one space to the left or right (or you could think of it as "up two and over one"), in a "T" shape.
      </p>
      <br></br>
      <button onClick={() => loadNarikei()}>Promote!</button>
    </section>
  )
}

const pieceNavHTML = (
  <section className="pieceNav">
    <button className="pieceNavBtn" id="king" onClick={() => loadKing()}>王</button>
    <button className="pieceNavBtn" id="rook" onClick={() => loadRook()}>飛</button>
    <button className="pieceNavBtn" id="bishop" onClick={() => loadBishop()}>角</button>
    <button className="pieceNavBtn" id="gold" onClick={() => loadGold()}>金</button>
    <button className="pieceNavBtn" id="silver" onClick={() => loadSilver()}>銀</button>
    <button className="pieceNavBtn" id="pawn" onClick={() => loadPawn()}>歩</button>
    <button className="pieceNavBtn" id="lance" onClick={() => loadLance()}>香</button>
    <button className="pieceNavBtn" id="knight" onClick={() => loadKnight()}>桂</button>
  </section>
)

function loadIntro() {
  if(activeRule === null) {
    activeRule = createRoot(
      document.getElementById('activeRule')
    );
  }

  activeRule.render(
    <div>
      <h2>{isChessPlayer}</h2>
      {
        isChessPlayer == true ?
          <p className="homeDesc">
            Shogi and chess are such similar games that many refer to shogi as "Japanese Chess" (and in Japan chess is called "Western Shogi!"). There are, however, some key differences that make the two quite distinct in both gameplay and strategy. Shogi is most similar to a variant of chess called "Crazy House" (a two player version of Bug House), but even knowing this, the pieces take some getting used to.
          </p>
        :
          <p className="homeDesc">
            You're definitely starting on the more exciting board game! While knowing chess may give you tactics and tricks to use, it can also be hard to "unlearn" some common chess techniques that don't work very well in Shogi, so don't worry too much either way.
          </p>
      }
      <br></br>
      <div className="navButtons">
        <button className="nextBtn" id="learn2" onClick={(e) => {updateLearnNav(e); loadBasics()}}></button>
      </div>
    </div>
  );

  document.getElementById('jump').scrollIntoView();
}

function loadBasics() {
  if(activeRule === null) {
    activeRule = createRoot(
      document.getElementById('activeRule')
    );
  }

  if(isChessPlayer) {
    activeRule.render(
      <div>
        <h2>Who goes first?</h2>
        <p className="homeDesc">
          You'll note there are no colored pieces in Shogi. Instead, the direction a piece is facing inidcates whose piece it is. The first player to make a move is called "Sente", and the player that moves second is called "Gote". Some books and notation will refer to sente as "black" and gote as "white", which is the opposite of the chess move order, so we tend to prefer using the Japanese terms to avoid confusion.
        </p>
        <br></br>
        <br></br>
        <div className="navButtons">
          <button className="prevBtn" id="learn1" onClick={(e) => {updateLearnNav(e); loadIntro()}}></button>
          <button className="nextBtn" id="learn3" onClick={(e) => {updateLearnNav(e); loadPiecesPage()}}></button>
        </div>
      </div>
    )
  } else {
    activeRule.render(
      <div>
        <h2>The Basics</h2>
        <p className="homeDesc">
          Shogi is a game played by two people who sit on opposite ends of a board. The first player to make a move is called "Sente", and the player that moves second is called "Gote". On each of their turns, a player may move one of the pieces they have on the board, or "drop" one of the pieces from their "hand" onto the board. The goal of the game is to put the opponent's king into "tsumi" (checkmate). More details on each of these rules on the following pages.
        </p>
        <br></br>
        <div className="navButtons">
          <button className="prevBtn" id="learn1" onClick={(e) => {updateLearnNav(e); loadIntro()}}></button>
          <button className="nextBtn" id="learn3" onClick={(e) => {updateLearnNav(e); loadPiecesPage()}}></button>
        </div>
      </div>
    );
  }
}

function loadPiecesPage() {
  if(activeRule === null) {
    activeRule = createRoot(
      document.getElementById('activeRule')
    );
  }

  activeRule.render(
    <div>
      <h2>The Pieces</h2>
      <p className="homeDesc">
        Shogi has 8 types of pieces (called "koma" 駒) with unique move sets, and 6 of those pieces can be "promoted", giving them an altered moveset (more on promotion later). 
        <br></br>
        Click the pieces below to learn more about each one!
      </p>
      {
        isChessPlayer ? 
        <p className="homeDesc">
          Note that while many have names similar to chess pieces,<span className="madeRed"> only the king, bishop, and rook move the same</span>. Shogi pawns move and capture forward, and shogi knights have only 2 possible moves, instead of 8.
          <br></br>
          Click the pieces below to learn more about each one!
        </p>
        :
        null
      }
  
      {pieceNavHTML}
  
      <section id="activePiece">
        {/* {activePieceDescription} */}
        {/* {pieceMovesHTML} */}
      </section>
      <br></br>
      <div className="navButtons"> 
        <button className="prevBtn" id="learn2" onClick={(e) => {updateLearnNav(e); loadBasics()}}></button>
        <button className="nextBtn" id="learn3" onClick={(e) => {updateLearnNav(e); loadBoard()}}></button>
      </div>
    </div>
  )
}

function loadBoard() {
  if(activeRule === null) {
    activeRule = createRoot(
      document.getElementById('activeRule')
    );
  }

  activeRule.render(
    <div>
      <h2>Setting the Board</h2>
      <p className="homeDesc">
        Below you'll see how to set up a standard Shogi game. You have 9 pawns in front, in the middle you have your bishop on the left and your rook on the right, and on the back row, starting in the center and moving out, you have your king, then your gold generals, silver generals, knights, and lances. Your opponent has the same, rotated 180 degrees.
      </p>
      {
        isChessPlayer ? 
        <p className="homeDesc">Note a key difference here: <span className="madeRed">a Shogi board is 9x9, meaning your bishops directly oppose one another at the start of the game</span>. If the board were checkered, they would be bishops of the same "color".</p>
        :
        null
      }
      <img className="board" src={setboard} />
      <br></br>
      <div className="navButtons">
        <button className="prevBtn" id="learn2" onClick={(e) => {updateLearnNav(e); loadPiecesPage()}}></button>
        <button className="nextBtn" id="learn4" onClick={(e) => {updateLearnNav(e); loadPromotion()}}></button>
      </div>
    </div>
  )
}

function loadPromotion() {
  if(activeRule === null) {
    activeRule = createRoot(
      document.getElementById('activeRule')
    );
  }

  activeRule.render(
    <div>
      <h2>Promotion</h2>
      <p className="homeDesc">
        Note the area of the board that your pieces and your opponent's pieces occupy at the start of the game. These are your "camps". Anytime one of your pieces <span className="madeRed">moves into, moves through, or moves out of</span> your enemy's camp, it may promote as part of this move. Your opponent can do the same with their pieces in your camp. You do not <em>need</em> to promote a piece unless it will be unable to move on your next turn (e.g. a pawn that reaches the back of the board), although it is usually favorable to do so. To promote a piece, simply flip it over before placing it on the board.
      </p>
      <img className="camps" src={camps} />
      <br></br>
      <div className="navButtons">
        <button className="prevBtn" id="learn4" onClick={(e) => {updateLearnNav(e); loadBoard()}}></button>
        <button className="nextBtn" id="learn6" onClick={(e) => {updateLearnNav(e); loadCapturesAndDrops()}}></button>
      </div>
    </div>
  )
}

function loadCapturesAndDrops() {
  if(activeRule === null) {
    activeRule = createRoot(
      document.getElementById('activeRule')
    );
  }

  activeRule.render(
    <div>
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
      <br></br>
      <div className="navButtons">
        <button className="prevBtn" id="learn5" onClick={(e) => {updateLearnNav(e); loadPromotion()}}></button>
        <button className="nextBtn" id="learn7" onClick={(e) => {updateLearnNav(e); loadWinning()}}></button>
      </div>
    </div>
  )
}

function loadWinning() {
  if(activeRule === null) {
    activeRule = createRoot(
      document.getElementById('activeRule')
    );
  }

  activeRule.render(
    <div>
      <section>
        <h2>Winning the Game</h2>
        {
          isChessPlayer == true ? 
            <p className="homeDesc">
              As in chess, you win the game by putting the enemy king in <span className="madeRed">checkmate</span>. This is called "tsumi" in Japanese, and just as in chess it is a position where the king is being attacked and cannot move, and is easier to do when the king is forced into a corner. Unlike chess, the most common way of checkmating is not by manuevering your pieces around, but rather by <span className="madeRed">dropping</span> a piece directly next to the king! Yes, you can drop pieces for checks and even for a mate. You can also drop a piece to block a check, which is why you almost always need to get in up close and personal to deliver the final blow. A common mate, called "atamakin" or "a gold to the head", is shown below.
            </p>
          :
          <p className="homeDesc">
            You win a game of Shogi by putting the enemy king in <span className="madeRed">checkmate</span>. This is called "tsumi" in Japanese, a position where the king is being attacked and cannot move, and it is easier to reach by forcing the king into a corner. The most common way of checkmating is not by manuevering your pieces around, but rather by <span className="madeRed">dropping</span> a piece directly next to the king! Yes, you can drop pieces for checks and even for a mate. You can also drop a piece to block a check, which is why you almost always need to get in up close and personal to deliver the final blow. A common mate, called "atamakin" or "a gold to the head", is shown below.
          </p>
        }
        
        <img className="atamkin" src={atamakin} />
  
        <p className="homeDesc">
          Note that the gold at the king's "head" is attacking the king and every space around it, and the king cannot take the gold because it is protected by another piece. You might have thought it odd that so many pieces move the same as a gold general when promoted, but you can see here just how deadly a gold so close to the king can be!
        </p>
        <img className="atamkinNotated" src={atamakinNotated} />
      </section>
      <br></br>
      <div className="navButtons">
        <button className="prevBtn" id="learn6" onClick={(e) => {updateLearnNav(e); loadCapturesAndDrops()}}></button>
        <button className="nextBtn" id="learn8" onClick={(e) => {updateLearnNav(e); loadIllegalMoves()}}></button>
      </div>
    </div>
  )  
}

function loadIllegalMoves() {
  if(activeRule === null) {
    activeRule = createRoot(
      document.getElementById('activeRule')
    );
  }

  activeRule.render(
    <div>
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
          {
            isChessPlayer == true ?
              <p>
                This should come as no surprise; just like in chess, you cannot endanger your king by leaving it open for capture on your opponent's next turn. You can't move into check, and if you are in check, you must use your turn to escape it. The one difference is in Shogi you can block with pieces in your hand instead of pieces on the board, so a material advantage can also mean a big defensive advantage.
              </p>
            :
              <p>
                Protect your king! If your king can be captured by your opponent on their next turn, you must do something to stop them. Similarly, you cannot endanger your king by moving it to a square that is being attacked by an enemy piece. If you lose the king you lose the game, even if you have have an amazing move ready. When your king is being attacked, it is in "check". You can get out of check by capturing the attacking piece (if there's only one), moving the king out of the way, moving a piece to block the attacker, or dropping a piece to block the attacker. If you cannot escape the attack, you are in "checkmate", and have lost the game. 
              </p>
          }
        </ul>
      </p>
      <br></br>
      <div className="navButtons">
        <button className="prevBtn" id="learn7" onClick={(e) => {updateLearnNav(e); loadWinning()}}></button>
        <button className="nextBtn" id="learn9" onClick={(e) => {updateLearnNav(e); loadManners()}}></button>
      </div>
    </div>
  )
}

function loadManners() {
  if(activeRule === null) {
    activeRule = createRoot(
      document.getElementById('activeRule')
    );
  }

  activeRule.render(
    <div>
      <h2>Manners</h2>
      <p className="homeDesc">
        Shogi, perhaps more than other board games, places a heavy emphasis on etiquette, or sportsmanship. 
        { isChessPlayer == true ? <span>In much the way that you might shake hands before a chess match, a S</span> : <span>A s</span> }hogi game does not begin until opponents greet each other with a head bow and "onegaishimasu" (similar to saying "good luck"), and does not truly end until one player says "makemashita" ("I have lost"). After the game is over, thank your opponent with another bow and "arigatou gozaimasu" ("Thank you [for the game]"). After all, win or lose, without our opponent, we would not get to enjoy such a fun and exciting game.
      </p>
      <br></br>
      <div className="navButtons">
        <button className="prevBtn" id="learn8" onClick={(e) => {updateLearnNav(e); loadIllegalMoves()}}></button>
      </div>
    </div>
  )
}

const learnNavHTML = (
  <section className="learnNav" id="learnNav">
    <button className="learnNavBtn" id="learn1" style={{"backgroundColor":"#d04646"}} onClick={(e) => {updateLearnNav(e); loadIntro();}}></button>
    <button className="learnNavBtn" id="learn2" onClick={(e) => {updateLearnNav(e); loadBasics()}}></button>
    <button className="learnNavBtn" id="learn3" onClick={(e) => {updateLearnNav(e); loadPiecesPage()}}></button>
    <button className="learnNavBtn" id="learn4" onClick={(e) => {updateLearnNav(e); loadBoard()}}></button>
    <button className="learnNavBtn" id="learn5" onClick={(e) => {updateLearnNav(e); loadPromotion()}}></button>
    <button className="learnNavBtn" id="learn6" onClick={(e) => {updateLearnNav(e); loadCapturesAndDrops()}}></button>
    <button className="learnNavBtn" id="learn7" onClick={(e) => {updateLearnNav(e); loadWinning()}}></button>
    <button className="learnNavBtn" id="learn8" onClick={(e) => {updateLearnNav(e); loadIllegalMoves()}}></button>
    <button className="learnNavBtn" id="learn9" onClick={(e) => {updateLearnNav(e); loadManners()}}></button>
  </section>
)

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
            <button onClick={() => {loadRules(true)}}>Yes</button>
            <button onClick={() => loadRules(false)}>No</button>
          </div>
        </section>
      </div>
    </main>
  );
};

function updateLearnNav(e) {
  const thisElem = e.target.id;
  // document.getElementsByClassName("learnNavBtn").setAttribute('style', 'background-color:#fcf4e1')

  document.getElementById(thisElem).setAttribute('style', 'background-color:#d04646')
}

function loadRules(userResponse) {
  const rulesRoot = createRoot(
    document.getElementById('rules')
  );

  isChessPlayer = userResponse;

  console.log(isChessPlayer);

  rulesRoot.render(
    <div className="knowChess">
      <div id="jump"></div>
        {
          isChessPlayer == true ? 
            <h2>Shogi for Chess Players</h2> 
          :
            <h2>Shogi for Beginners</h2>
        }
      {learnNavHTML}
      <section id="activeRule">
        {
          isChessPlayer == true ? 
            <p className="homeDesc">
              Shogi and chess are such similar games that many refer to Shogi as "Japanese Chess." There are, however, some key differences that make the two quite distinct in both gameplay and strategy. Shogi is most similar to a variant of chess called "Crazy House" (a two player version of Bug House), but even knowing this, the pieces take some getting used to.
            </p>
          :
            <p className="homeDesc">
              You're definitely starting on the more exciting board game! While knowing chess may give you 
              tactics and tricks to use, it can also be hard to "unlearn" some common chess techniques that
              don't work very well in Shogi, so don't worry too much either way.
            </p>
        }
      </section>
    </div>
  )
}

export default Learn;