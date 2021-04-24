import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import App from './App';
import GlobalStyle from "./styles";
import GlobalFonts from "./styles/fonts";

import "./index.css";

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <GlobalFonts />
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
