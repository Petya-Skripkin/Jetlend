import styled from "styled-components";
import { colors } from "../../constants";

export const ThirdBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

export const BlockProcent = styled.div`
  width: 90%;
  padding: 50px 100px;
  position: relative;
  top: -300px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${colors.white};
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
`;

export const Content = styled.div`
  width: 60%;
`;

export const Payment = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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