import React from "react";

//component
import { Square } from "./Square.js";
//styled-component
import { BoxStyles } from "../styles/BoxStyles";



export const Box = ({
  board,
  disabled,
  player,
  winner,
  addSymbol
}) => {
  return (
    <BoxStyles>
      {board.map((square, squareIndex) => {
        return (
          <Square
            addSymbol={addSymbol}
            boxNum={squareIndex}
            disabled={disabled}
            key={squareIndex}
            player={player}
            winner={winner}
          />
        );
      })}
    </BoxStyles>
  );
};
