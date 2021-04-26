import styled from "styled-components";
import { colors } from "../../constants";

export const ThirdBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

export const Background = styled.div`
  position: relative;
  padding-top: 200px;
  background-color: ${colors.AquaHaze};

  @media (max-width: 1000px) {
    padding-top: 20em;
  }
`;

export const BlockProcent = styled.div`
  width: 90%;
  padding: 50px 100px;
  position: absolute;
  top: -350px;
  left: 0;
  right: 0;
  min-height: 476px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${colors.white};

  @media (max-width: 1000px) {
    top: -310px;
    padding: 5%;
  }
`;

export const Description = styled.p`
  font-size: 35px;
  text-align: center;
  margin-bottom: 27px;
`;

export const Conteiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 60%;
`;

export const Payment = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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

export const Specification = styled.p`
  font-size: 13px;
  font-weight: normal;
`;

export const Sum = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 11px;
  margin-bottom: 38px;
  font-size: 25px;

  &::after{
    content: "";
    width: 90%;
    margin-top: 33px;
    border: 1px solid ${colors.black};
  }
`;
