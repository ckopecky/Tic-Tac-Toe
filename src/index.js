import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
    background: lightgrey;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
  }

`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  rootElement
);
