import styled, {css} from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "../..";
import { colors } from "../../../constants";

export const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 111px;
`;

export const Logo = styled.img`
  height: 43px;

  @media (max-width: 1000px) {
    width: 60%;
    height: 3em;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;

  @media(max-width: 1000px){
    display: none;
  }
`;

export const NavMenu = styled.nav `
  width: 80%;
`;

export const LogIcon = styled(Icon)`
  height: 16px;
  fill: ${colors.white};
`;

export const BurgerButton = styled.button<{ open: boolean }>`
  display: none;

  ${({ open }) =>
    open &&
    css`
      width: 100%;
      height: 100%;
      & > button {
        width: 100%;
      }
    `};

  @media (max-width: 1000px) {
    display: inline-block;
  }
`;

export const BurgerIcon = styled(Icon)`
`;

export const BurgerList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  background-color: ${colors.black};
`;

export const BurgerItems = styled.li`
  display: inline-block;
  width: 100%;
`;

export const BurgerLinks = styled(Link)`
  text-decoration: none;
  color: ${colors.white};

  &:hover{
    color: ${colors.CaribbeanGreen};
  }
`;
