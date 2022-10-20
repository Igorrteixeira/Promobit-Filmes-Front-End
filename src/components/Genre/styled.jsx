import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const ContainButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 57vw;
  gap: 12px;
`;
export const Title = styled.h1`
  color: white;
  text-align: center;
  width: 40vw;
  margin-top: 40px;
`;
export const SearchBy = styled.p`
  font-size: 13px;
  color: white;
  margin-top: 20px;
`;

export const Button = styled.button`
  border: none;

  padding: 10px;
  border-radius: 5px;
`;
export const ActiveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  border: none;

  padding: 10px;
  border-radius: 5px;
  background-color: #d18000;
  color: white;
`;
