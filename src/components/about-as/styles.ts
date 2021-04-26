import styled from "styled-components";
import { Icon } from "..";
import { colors } from "../../constants";

export const Title = styled.p`
  margin-bottom: 35px;
  font-size: 35px;
  font-weight: 700;
  text-align: center;

  @media(max-width: 1000px){
    font-size: 25px;
  }
`;

export const Link = styled.a`
  border-bottom: 1px dashed ${colors.CaribbeanGreen};
  font-size: 35px;
  font-weight: 700;
  color: ${colors.CaribbeanGreen};
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 1000px) {
    font-size: 25px;
  }
`;

export const Conteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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

  @media (max-width: 1000px) {
    width: 133px;
    height: 96px;
    margin: 1%;
  }
`;

export const Logo = styled(Icon)`
  width: 100px;
  fill: inherit;
`;
