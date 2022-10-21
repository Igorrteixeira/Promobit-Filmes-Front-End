import { useParams } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL, key } from "../../constants/BASE_URL";
import { Header } from "../../components/Header/Header";
import { DetailHeader } from "../../components/DetailsHeader/DetailsHeader";
import { CardDetails } from "../../components/CardDetails/CardDetails";
import { CardMovies } from "../../components/CardMovies/CardMovies";
import { FormatDate } from "../../services/FormatDate";
import { Container, Recommendation, Video, ContainDetails } from "./styled";

export const Details = () => {
  const pathParams = useParams();
  const movie = pathParams.id;

  const details = useRequestData(
    [],
    `${BASE_URL}/movie/${movie}?${key}&append_to_response=release_dates,credits,videos,recommendations&language=pt-BR`
  ).data;

  const recomendation = details?.recommendations?.results?.map((movie) => {
    const date = movie.release_date.split("-");
    const month = FormatDate(movie.release_date);
    const newDate = `${date[2]} ${month} ${date[0]}`;

    const teste = details?.genres?.some((item) =>
      movie.genre_ids.includes(item.id)
    );
    if (teste) {
      return (
        <CardMovies
          title={movie.title}
          backDrop={movie.poster_path}
          date={newDate}
        />
      );
    }
  });

  console.log(details);
  return (
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
          />
        }
      />
      <ContainDetails>
        <h3>Elenco original</h3>
        <CardDetails cast={details?.credits?.cast} />
        <h3>Trailer</h3>
        <Video
          src={`https://www.youtube.com/embed/${details?.videos?.results[0]?.key}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Video>
        <h3>Recomendações</h3>
        <Recommendation>{recomendation}</Recommendation>
      </ContainDetails>
    </Container>
  );
};
