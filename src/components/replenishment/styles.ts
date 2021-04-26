import styled, { css } from "styled-components";
import { colors } from "../../constants";

export const Gradient = styled.div<{ bgImage: string }>`
  width: 100%;
  padding-bottom: 5%;
  box-sizing: content-box;
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.white};
`;

export const Content = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px;

  @media(max-width: 660px){
    width: 100%;
    flex-direction: column-reverse;
    align-items: flex-end;
    justify-content: center;
    padding: 5%;
  }
`;

export const RMenu = styled.ul`
  display: flex;
`;

export const RLebel = styled.li`
  display: inline-block;
  cursor: pointer;

  &:after {
    content: "|";
    font-weight: normal;
    padding: 22px;
    color: ${colors.CaribbeanGreen};
  }
  &:last-of-type {
    &:after {
      content: none;
    }
  }
`;

export const RLink = styled.button<{ active: boolean }>`
  color: inherit;

  &:hover {
    border-bottom: 1px solid ${colors.CaribbeanGreen};
  }

  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid ${colors.CaribbeanGreen};
    `}
`;

export const Logo = styled.img`
  height: 32px;

  @media (max-width: 660px) {
    height: 1.5em;
  }
`;

export const Conteiner = styled.div`
  padding: 0 80px;
  @media (max-width: 660px) {
    padding: 1%;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 36px;
  font-size: 75px;

  @media (max-width: 1050px) {
    font-size: 4em;
    margin-bottom: 0.5em;
  }
  @media (max-width: 540px) {
    font-size: 1.8em;
    margin-bottom: 0.5em;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 540px) {
    margin-bottom: 0.5em;
  }
`;

export const Item = styled.li`
  margin-left: 34px;
  margin-right: 36px;
  margin-bottom: 51px;
  font-size: 19px;
  color: ${colors.CaribbeanGreen};

  @media (max-width: 540px) {
    font-size: 15px;
    margin: 0;
    margin-left: 20px;
    margin-bottom: 10px
  }
`;

export const Text = styled.nav`
  color: ${colors.white};
`;

export const Button = styled.button`
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