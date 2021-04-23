import styled, { css } from "styled-components";

import { Link } from "react-router-dom";
import { colors } from "../../constants";

export const Content = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Item = styled.li`
  display: inline-block;
`;

export const ItemLink = styled(Link)<{ isActive: boolean }>`
  color: ${colors.black};
  font-weight: bold;
  text-decoration: none;
  box-sizing: content-box;

    ${({ isActive }) =>
      isActive === true &&
      css`
        border-bottom: 2px solid ${colors.CaribbeanGreen};
      `};
`;