import styled from "styled-components";
import { colors } from "../../../constants";
import Icon from "../../icon";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5% 5%;
  background-color: ${colors.black};
`;

export const IconConteiner = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const Logo = styled.img`
  height: 31px;
`;

export const IconsLink = styled.a`
  margin-right: 15px;
`;

export const Icons = styled(Icon)`
  height: 24px;
  stroke: none;
  fill: ${colors.white};
`;

export const LogIcon = styled(Icon)`
  height: 16px;
  fill: ${colors.white};
`;

export const LinkContent = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  margin: 8px 0;
  color: ${colors.white};
  font-weight: normal;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
`;

export const Adress = styled.nav`
  max-width: 250px;
  color: ${colors.white};
  font-weight: 300;
  font-size: 13px;
`;

export const LastContent = styled.nav`
  max-width: 233px;
  color: ${colors.white};
  font-size: 13px;
  font-weight: normal;
`;
