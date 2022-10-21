import styled from "styled-components";

export const Container = styled.div``;
export const ContainDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0 50px 20vh;
  gap: 20px;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin: 50px auto;
    width: 90vw;
    justify-content: center;
  }
`;
export const Video = styled.iframe`
  width: 50vw;
  height: 55vh;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 90vw;
    height: 32vh;
  }
`;
export const Recommendation = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    align-items: center;
  }
`;
