import React, { useState } from "react";
import { SquareStyles } from "../styles/SquareStyles";

export const Square = ({
  addSymbol,
  boxNum,
  disabled,
  player,
}) => {

  //need indiv state here as symbol state on App.js would 
  //turn all squares into the player's symbol
  const [ symbol, setSymbol ] = useState('');
  //indiv disable button so that it can't be changed while game is going on
  
  //we also have a global disable in case winner 
  //is determined before all boxes are filled. 

  const [ buttonDisable, setButtonDisable ] = useState(false);

  const handleClick = (e) => {  
    setSymbol(player);
    addSymbol(boxNum)
    setButtonDisable(true);
  };
  return (
    <SquareStyles
      className="square"
      disabled={disabled ||  buttonDisable}
      onClick={(e) => handleClick(e)}
      symbol={symbol}
    >
      {symbol}
    </SquareStyles>
  );
};
