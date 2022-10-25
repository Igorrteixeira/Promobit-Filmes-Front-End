import { useNavigate } from "react-router-dom"
import {IMG_URL} from "../../constants/IMG_URL"
import Rating from '@mui/material/Rating';
import {Container,DateMovie,Title,ImageMovie} from "./styed"

 import { goToDetails } from "../../router/Coordinator"
export const CardMovies = (props) => {
    const navigate = useNavigate()
    const {id,backDrop,title,date,voteAverage} = props
    const vote = String(props.voteAverage).substr(0, 3)
    console.log((Number(vote)/2),vote)
    
    

    return(
        <Container key={id} onClick={()=>goToDetails(navigate(`details/${id}`))}>
            <ImageMovie src={IMG_URL+backDrop}alt="" />
            <Title>{title}</Title>
            <DateMovie>{date}</DateMovie>
            <Rating
        name="simple-controlled"
        precision={0.5}
        size="small"
        value={(Number(vote)/2)}
        />
        </Container>
    )

}