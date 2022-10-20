import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 2vw;
    width: 80vw;
    height: 350px;
    margin: 0px auto;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        background-color: white;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #918e8e;
        width: 260px;
        height: 12px; 
        border-radius: 10px;
  }
  

    
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    

    background-color: #ffffff;
    box-shadow: 5px 5px #b6b0b025;
    border-radius: 5px;
    gap: 10px;
    height: 290px;
`

export const Character = styled.p`
    padding-left: 5px;
`
export const Img = styled.img`
    width: 170px;
    height: 180px;
    margin: 5px;
    border-radius: 5px;
    
`
export const Name = styled.h3`
    padding-left: 5px;
`

