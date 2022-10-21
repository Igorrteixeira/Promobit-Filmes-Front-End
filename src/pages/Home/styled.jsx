import styled from "styled-components";
export const Container = styled.div`
  width: 98vw;
  margin: 0px;
`;
export const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5vw;
  width: 90vw;
  margin: 20px auto;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 98vw;
    margin: 0;
    margin: 20px auto;
  }
`;
export const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
`;
