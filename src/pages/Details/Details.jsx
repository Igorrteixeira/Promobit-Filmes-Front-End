import { useParams } from "react-router-dom"
import {Container,TitleCast} from "./styled"
import {useRequestData} from "../../hooks/useRequestData"
import {BASE_URL,key} from "../../constants/BASE_URL"
import { Header } from "../../components/Header/Header"
import { DetailHeader } from "../../components/DetailsHeader/DetailsHeader"
import { CardDetails } from "../../components/CardDetails/CardDetails"


export const Details = () => {
    const pathParams = useParams()
    const movie = pathParams.id

    const details = useRequestData([],`${BASE_URL}/movie/${movie}?${key}&append_to_response=release_dates,credits,videos&language=pt-BR`).data



     console.log(details)
    return(
        <Container>
            <Header
            details={
            <DetailHeader
                id={details.id}
                img={details.poster_path}
                title={details.title}
                year={details.release_date}
                date={details.release_date}
                genres={details.genres}
                runTime={details.runtime}
                releaseDates={details.release_dates}
                voteAverage={details.vote_average}
                overview={details.overview}
                credits={details?.credits?.crew}
            />}
            />
            <TitleCast>Elenco original</TitleCast>

            <CardDetails
            cast={details?.credits?.cast}
            />

            <h3>Trailer</h3>
           
        <video width="300px" height="300px" autoPlay controls src="https://www.youtube.com/watch?v=aj4APVsbvrQ">
        <source src={"https://www.youtube.com/watch?v=aj4APVsbvrQ"} type="video/mp4"/>
      </video>
            
        </Container>
    )
}

//https://www.youtube.com/watch?v=aj4APVsbvrQ