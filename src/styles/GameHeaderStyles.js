import styled from "styled-components";

export const GameHeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  padding-bottom: 25px;
  padding-left: 15px;
  .stats {
    display: flex;
    width: 33%;
    justify-content: space-around;
    #header-x,
    #header-y {
      font-size: 2rem;
      width: 20%;
    }
    /* "#2982DC" : "#DD2929" */
    #header-x {
      color: #2982DC;
    }
    #header-y {
      color: #DD2929;
    }
    .player {
      display: flex;
      flex-direction: column;
      width: 67%;
    }

    .one {
      align-items: flex-start;
    }

    .two {
      align-items: flex-end;
    }

    .player-id {
      font-size: 1rem;
      padding-top: 5px;
    }
    .status {
      font-size: 0.75rem;
      font-weight: ${(props) =>
        props.status === "YOUR TURN!" ? "bold" : "normal"};
      color: ${(props) =>
        props.status === "YOU WIN!"
          ? "green"
          : props.status === "DRAW"
          ? "darkcyan"
          : "black"};
    }
  }
`;
