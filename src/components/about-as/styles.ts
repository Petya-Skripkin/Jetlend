import styled from "styled-components";
import { Icon } from "..";
import { colors } from "../../constants";

export const Title = styled.p`
  margin-bottom: 35px;
  font-size: 35px;
  font-weight: 700;
  text-align: center;
`;

export const Link = styled.a`
  border-bottom: 1px dashed ${colors.CaribbeanGreen};
  font-size: 35px;
  font-weight: 700;
  color: ${colors.CaribbeanGreen};
  text-decoration: none;
  cursor: pointer;
`;

export const Conteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 169px;
  height: 121px;
  margin: 16px;
  background-color: ${colors.white};
  fill: ${colors.Mystic};

  &:hover {
    background-color: ${colors.CaribbeanGreen};
    fill: ${colors.white};
  }
`;

export const Logo = styled(Icon)`
  width: 100px;
  fill: inherit;
`;
