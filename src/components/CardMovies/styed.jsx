import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 176px;
  gap: 4px;  
  font-weight: bold;
  font-family: "Roboto", sans-serif;
`
export const ImageMovie = styled.img`
  width: 176px;
  height: 274px;
  border-radius: 5px;
`
export const Title = styled.p`
  margin: 0;
  max-width: 15ch;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const DateMovie = styled.p`
  color: #646464;
  margin: 0;
`
