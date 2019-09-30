import React, { useState } from "react";
import { createStage } from "../gameHelpers";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

// Custom Hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

// Styled Components
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";

const Tetris = ({ type }) => {
  const [dropTime, setDropTime] = useState(null); // toggle the speed of the dropping tetrominos here
  const [gameOver, setGameOver] = useState(false); // toggle true/false for game status
  const [player] = usePlayer(); // pull in player object from custom hook
  const [stage, setStage] = useStage(); // pull in stage object from custom hook

  console.log("re-render");

  // functions for player movement
  const movePlayer = e => {

  }

  const startGame = () => {

  }

  const drop = () => {

  }

  const dropPlayer = () => {
    
  }

  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over!" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
