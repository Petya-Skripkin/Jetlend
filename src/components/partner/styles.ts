import styled from "styled-components";
import { colors } from "../../constants";

export const Content = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.CaribbeanGreen};

  @media(max-width: 1125px){
    flex-wrap: wrap;
  }
`;

export const Image = styled.img`
  width: 50%;
  height: 420px;
  border: none;

  @media (max-width: 1125px) {
    width: 100%;
  }
`;

export const Video = styled.iframe`
  width: 50%;
  height: 420px;
  border: none;

  @media (max-width: 1125px) {
    width: 100%;
  }
`;

export const Conteiner = styled.nav`
  width: 50%;
  height: 100%;
  padding: 90px 120px;
  color: ${colors.white};

  @media (max-width: 1125px) {
    width: 100%;
    padding: 3em 3.3em;
  }
`;

export const Description = styled.p`
  margin-bottom: 15px;
  font-size: 35px;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 13px;
  font-weight: normal;
`;
