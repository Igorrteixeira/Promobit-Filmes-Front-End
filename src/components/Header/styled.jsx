import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Roboto", sans-serif;
  gap: 10px;
  background-color: #2d0c5e;
  width: 99vw;
  height: 60vh;
`;

export const TextTopHeader = styled.h1`
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
  margin-left: 80px;
  letter-spacing: 5px;
  font-size: 26px;
  padding: 6px;
  div {
    background-color: white;
    border-radius: 15px;
    width: 50px;
    height: 20px;
  }
`;

export const TopHeader = styled.div`
  display: flex;
  background-color: #5c16c5;
  width: 99vw;
  height: 6vh;
`;
