import styled, { createGlobalStyle } from "styled-components";

import { colors } from "../constants";

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 14px 34px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  background-color: ${colors.CaribbeanGreen};
  color: ${colors.white};
`;

const globalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    font-weight: bold;
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
