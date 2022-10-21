import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Roboto", sans-serif;
  gap: 10px;
  background-color: #2d0c5e;
  width: 100vw;
`;

export const TextTopHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
  margin-left: 80px;
  letter-spacing: 5px;
  font-size: 26px;
  padding: 6px;
  width: 100%;
  h1 {
    font-size: 30px;
  }
  span {
    background-color: white;
    border-radius: 15px;
    width: 50px;
    height: 20px;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100vw;
    margin-left: 0;
    justify-content: center;
  }
`;

export const TopHeader = styled.div`
  display: flex;
  background-color: #5c16c5;
  width: 99vw;
  height: 6vh;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  }
`;
