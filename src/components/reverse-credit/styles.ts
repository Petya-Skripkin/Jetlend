import styled, { css, keyframes } from "styled-components";
import { colors } from "../../constants";

export const Gradient = styled.div<{ bgImage: string }>`
  height: 568px;
  padding: 82px;
  box-sizing: content-box;
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.white};
`;

export const StepItem = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 30px;
    left: calc(50% + 20px);
    right: 0;
    transform: translateY(-50%);
    height: 3px;
    z-index: 1;
    background-color: ${colors.CaribbeanGreen};
  }

  &:not(:first-child)::before {
    content: "";
    position: absolute;
    top: 30px;
    right: calc(50% + 20px);
    left: 0;
    transform: translateY(-50%);
    height: 3px;
    z-index: 1;
    background-color: ${colors.CaribbeanGreen};
  }
`;

const slider = keyframes`
  0% {
    box-shadow: 0 0 0 10px rgba(14, 209, 147, 0.25);
  }
  
  50% {
    box-shadow: 0 0 0 0px ${colors.CaribbeanGreen};
  }

  100% {
    box-shadow: 0 0 0 10px rgba(14, 209, 147, 0.25);
  }
`;

export const Circle = styled.div<{ isActive?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 40px;
  height: 40px;
  border: 3px solid ${colors.CaribbeanGreen};
  border-radius: 50%;
  z-index: 3;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  background-color: transparent;
  color: ${colors.white};
  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: 0 0 0 10px rgba(14, 209, 147, 0.25);
      animation: ${slider} 1s ease-in infinite;
      background-color: ${colors.CaribbeanGreen};
    `};
`;

export const Title = styled.h4<{ isActive?: boolean }>`
  margin-top: 8px;
  max-width: 200px;
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: ${colors.white};

  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: 500;
    `}
`;

export const Description = styled.p`
  font-size: 35px;
  margin-bottom: 54px;
  text-align: center;
`;

export const Container = styled.ul`
  display: flex;

  @media (max-width: 600px) {
    display: block;

    ${StepItem} {
      flex-direction: row;
      padding: 10px;

      &:not(:first-child) {
        padding-top: 17px;

        &::before {
          left: 30px;
          bottom: 0;
          right: 0;
          top: 0;
          transform: translate(0, 0) rotate(90deg);
          transform-origin: left;
          width: 17px;
        }
      }

      &:not(:last-child) {
        &::after {
          left: 30px;
          bottom: 0;
          right: 0;
          top: calc(100% + 3px);
          transform: translate(0, 0) rotate(-90deg);
          transform-origin: left;
          width: 17px;
        }
      }
    }

    ${Circle} {
      margin: 0;
    }

    ${Title} {
      margin-top: 0;
      margin-left: 19px;
      text-align: left;
    }
  }
`;
