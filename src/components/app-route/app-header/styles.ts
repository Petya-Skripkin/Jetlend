import styled from "styled-components";
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
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
`;

export const NavMenu = styled.nav `
  width: 80%;
`;

export const LogIcon = styled(Icon)`
  height: 16px;
  fill: ${colors.white};
`;
