import styled from "styled-components";
import { colors } from "../../constants";

export const Heading = styled.p`
  margin-bottom: 37px;
  font-size: 35px;
  text-align: center;
`;

export const Content = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Conteiner = styled.div`
display: inline-block;
  max-width: 413px;
  padding: 50px;
  margin: 10px;
  background-color: ${colors.AquaHaze};
`;

export const Paragraph = styled.p`
  margin-bottom: 18px;
  font-size: 25px;
`;

export const Text = styled.span`
  font-size: 13px;
`;
