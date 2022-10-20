import { useContext } from "react"
import {IMG_URL} from "../../constants/IMG_URL"
import {Container,DateMovie,Title,ImageMovie} from "./styed"

 
export const CardMovies = (props) => {
    

    return(
        <Container key={props.id} onClick={props.button}>
            <ImageMovie src={IMG_URL+props.backDrop}alt="" />
            <Title>{props.title}</Title>
            <DateMovie>{props.date}</DateMovie>
            <p>{props.genre}</p>
        </Container>
    )

}