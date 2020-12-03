import React, { useEffect, useState } from "react";
import { GameHeaderStyles } from "../styles/GameHeaderStyles";

export const GameHeader = ({ player, winner }) => {
  const [statusDiv1, setStatusDiv1] = useState("");
  const [statusDiv2, setStatusDiv2] = useState("");

  useEffect(() => {
    const status = () => {
      if (winner === "X") {
        setStatusDiv1("YOU WIN!");
        setStatusDiv2("");
      } else if (winner === "O") {
        setStatusDiv2("YOU WIN!");
        setStatusDiv1("");
      } else if (winner === "DRAW") {
        setStatusDiv2("DRAW");
        setStatusDiv1("DRAW");
      } else {
        if (player === "X") {
          setStatusDiv1("YOUR TURN!");
          setStatusDiv2("");
        } else {
          setStatusDiv2("YOUR TURN!");
          setStatusDiv1("");
        }
      }
    };
    status();
  });
  return (
    <GameHeaderStyles status={statusDiv1 || statusDiv2} winner={winner}>
      <div className="stats">
        <div id="header-x">X</div>
        <div className="player one">
          <div className="player-id">PLAYER 1</div>
          <div className="status">{statusDiv1}</div>
        </div>
      </div>
      <div className="stats">
        <div className="player two">
          <div className="player-id">PLAYER 2</div>
          <div className="status">{statusDiv2}</div>
        </div>
        <div id="header-y">O</div>
      </div>
    </GameHeaderStyles>
  );
};
