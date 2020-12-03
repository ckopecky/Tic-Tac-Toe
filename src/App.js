import React, { useEffect, useState } from "react";

// components import
import { Box } from "./components/Box";
import { GameHeader } from "./components/GameHeader";

//possible winning combos
let winners = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


export default function App() {
  //this keeps track of the player we are on
  const [player, setPlayer] = useState("X");
  //this keeps track of the state of the board
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]);
  const [blocksLeft, setBlocksLeft] = useState(9);
  //this keeps track of whether or not we have a winner -- 
  //if it's a DRAW, that will be declared here as well

  
  const [winner, setWinner] = useState("Undecided");
  const [disable, setDisable ] = useState(false);

  useEffect(() => {
    const checkWinner = () => {
      for (let i = 0; i < winners.length; i++) {
        let firstIndex = board[winners[i][0]];
        let secondIndex = board[winners[i][1]];
        let thirdIndex = board[winners[i][2]];
        if (
          firstIndex === null ||
          secondIndex === null ||
          thirdIndex === null
        ) {
          handleSetWinner("Undecided");
        } else if (firstIndex === secondIndex && secondIndex === thirdIndex) {
          handleSetWinner(firstIndex);
          setDisable(true);
          return;
        } else if(winner === "Undecided" && blocksLeft === 0) {
          handleSetWinner("DRAW")
          setDisable(true);
          return;
        }
      }
    };
    checkWinner();

  }, [blocksLeft, winner, board]);


  
  
  const handleSetWinner = (player) => {
    setWinner(player);
  };

  const handleBoardChange = (index, symbol) => {
    let mapped = [...board].map((item, i) => {
      return i === index ? symbol : item;
    });
    setBoard(mapped);
    return;
  };
  const handlePlayerChange = (e) => {
    setPlayer(player === "X" ? "O" : "X");
    setBlocksLeft(blocksLeft - 1);
  };

  const addSymbol = (index) => {
    handleBoardChange(index, player);
    if(winner === "Undecided") {
      handlePlayerChange();
    }
  }
  return (
    <div className="App">
      <GameHeader player={player} winner={winner} />
      <Box
        board={board}
        disabled={disable}
        player={player}
        winner={winner}
        addSymbol={addSymbol}
      />
    </div>
  );
}
