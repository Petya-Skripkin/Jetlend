import { createGlobalStyle } from "styled-components";

import { colors } from "../constants";

const globalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }

  body {
    background-color: ${colors.white};
  }
`;

export default globalStyles;
