import { useNavigate } from "react-router-dom"
import {IMG_URL} from "../../constants/IMG_URL"
import {Container,DateMovie,Title,ImageMovie} from "./styed"

 import { goToDetails } from "../../router/Coordinator"
export const CardMovies = (props) => {
    const navigate = useNavigate()
    
    return(
        <Container key={props.id} onClick={()=>goToDetails(navigate(`details/${props.id}`))}>
            <ImageMovie src={IMG_URL+props.backDrop}alt="" />
            <Title>{props.title}</Title>
            <DateMovie>{props.date}</DateMovie>
            <p>{props.genre}</p>
        </Container>
    )

}