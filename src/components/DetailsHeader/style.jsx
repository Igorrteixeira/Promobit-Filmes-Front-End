import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  color: white;
  width: 80vw;
  gap: 5vw;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    width: 90vw;
  }
`;

export const ImageMovie = styled.img`
  width: 39vh;
  border-radius: 5px;

  margin-bottom: -30px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-bottom: 0;
    width: 50vw;
    margin: 10px auto;
  }
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
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
  }
`;

export const Genre = styled.div`
  display: flex;
  gap: 8px;
  p ~ p::before{
        content:",";
    }
`;

export const Date = styled.div`
  display: flex;
  gap: 5px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
  }
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
  letter-spacing: 1px;
`;

export const Crew = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 65vw;
  gap: 1vw;
  margin-bottom: 10px;
  div {
    width: 200px;
  }
`;
