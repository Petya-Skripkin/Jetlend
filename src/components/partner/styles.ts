import styled from "styled-components";
import { colors } from "../../constants";

export const Content = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.CaribbeanGreen};
`;

export const Image = styled.img`
  width: 50%;
  height: 420px;
  border: none;
`;

export const Video = styled.iframe`
  width: 50%;
  height: 420px;
  border: none;
`;

export const Conteiner = styled.nav`
  width: 50%;
  height: 420px;
  padding: 90px 120px;
  color: ${colors.white};
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
