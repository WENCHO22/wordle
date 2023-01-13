import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, correctWord, currAttempt } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord ? "You guessed the word!" : "You suck(loser) "}
      </h3>
      <h2>The word was: {correctWord}</h2>
      {gameOver.guessedWord && (
        <h3>
          You guessed it in {currAttempt.attempt} attempts! Congratulations!
        </h3>
      )}
    </div>
  );
}

export default GameOver;
