import styled from "styled-components";

export const SquareStyles = styled.button`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33.33%;
  border-radius: 0px;
  border: 0.25px solid lightgrey;
  cursor: pointer;
  font-size: 3rem;
  background-color: whitesmoke;
  color: ${(props) => (props.symbol === "X" ? "#2982DC" : "#DD2929")};
`;
