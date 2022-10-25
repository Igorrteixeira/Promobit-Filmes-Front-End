import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 50px;
`;
export const ContainButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 57vw;
  gap: 12px;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    justify-content: flex-start;
    width: 90vw;
  }
`;
export const Title = styled.h1`
  color: white;
  text-align: center;
  width: 40vw;
  margin-top: 40px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 90vw;
    margin-top: 20px;
    text-align: start;
    margin-left: 20px;
  }
`;
export const SearchBy = styled.p`
  font-size: 13px;
  color: white;
  margin-top: 20px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 89vw;
    text-align: start;
    margin-left: 12px;
  }
`;

export const Button = styled.button`
  border: none;
  font-weight: bold;
  color: #323232;
  padding: 10px;
  border-radius: 5px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100px;
    display:flex;
    justify-content: center;
  }
`;
export const ActiveButton = styled.button`
  display: flex;
  align-items: center;
  border: none;

  padding: 10px;
  border-radius: 5px;
  background-color: #d18000;
  color: white;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100px;
    display:flex;
    justify-content: center;
  }
`;
