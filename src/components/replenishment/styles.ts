import styled, { css } from "styled-components";
import { colors } from "../../constants";

export const Gradient = styled.div<{ bgImage: string }>`
  width: 100%;
  height: 652px;
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
`;

export const RMenu = styled.ul``;

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
`;

export const Conteiner = styled.div`
  padding: 0 80px;
`;

export const Paragraph = styled.p`
  margin-bottom: 36px;
  font-size: 75px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin-left: 34px;
  margin-right: 36px;
  margin-bottom: 51px;
  font-size: 19px;
  color: ${colors.CaribbeanGreen};
`;

export const Text = styled.nav`
  color: ${colors.white};
`;
