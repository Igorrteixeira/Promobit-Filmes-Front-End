import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  color: white;
  width: 80vw;
  gap: 5vw;
`;

export const ImageMovie = styled.img`
  width: 38vh;
  border-radius: 5px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const DateAndTime = styled.div`
  display: flex;
  font-size: 18px;
  gap: 10px;
`;

export const Date = styled.div`
  display: flex;
  gap: 5px;
`;

export const Average = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.1);
  width: 60px;
  height: 60px;
  border-radius: 100%;
  color: #14ff00;

  #progress {
    color: #14ff00;
    position: absolute;
  }
`;

export const VoteAverage = styled.div`
  display: flex;
  width: 220px;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
`;
export const Sinopse = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Crew = styled.div`
  display: flex;
  gap: 5vw;
`;
