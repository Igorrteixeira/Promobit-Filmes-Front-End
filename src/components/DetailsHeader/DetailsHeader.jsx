import { BASE_URL, key } from "../../constants/BASE_URL";
import { IMG_URL } from "../../constants/IMG_URL";
import { FormatDateBr } from "../../services/FormatDate";
import { ConvertHour } from "../../services/ConvertHour";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Container,
  ImageMovie,
  DateAndTime,
  Description,
  Date,
  Average,
  VoteAverage,
  Crew,
  Sinopse,
  Genre,
} from "./style";

export const DetailHeader = (props) => {
  const {id,runTime,voteAverage,title,img,year,releaseDates,genres,credits,overview} = props
  const hour = ConvertHour(runTime);
  const vote = String(props.voteAverage)
    .replace(/\D+/g, "")
    .substr(0, 2);

  return (
    <Container>
      <ImageMovie src={IMG_URL + img} alt="" />
      <Description>
        <h1>
          {title} ({year && year.substr(0, 4)})
        </h1>
        <DateAndTime>
          {releaseDates?.results?.map((item) => {
            if (item.iso_3166_1 === "BR") {
              const date = FormatDateBr(
                item.release_dates[0].release_date
              ).split("-");
              return (
                <Date key={id}>
                  <p>{item.release_dates[0].certification} anos </p>
                  <p>
                    {date} ({item.iso_3166_1})
                  </p>
                </Date>
              );
            }
          })}
          <Genre>
            {genres?.map((genre) => {
              return <p key={genre.id}> {genre.name} </p>;
            })}
          </Genre>
          <p>
            {hour.textHoras}h {hour.textrunTime}m
          </p>
        </DateAndTime>
        <VoteAverage>
          <Average>
            <CircularProgress
              variant="determinate"
              value={Number(vote)}
              id={"progress"}
              size={"60px"}
            />
            {vote}%
          </Average>
          <p>Avaliação dos usuários</p>
        </VoteAverage>
        <Sinopse>
          <h2>Sinopse</h2>
          <p>{overview}</p>
        </Sinopse>
        <Crew>
          {credits?.map((crew) => {
            if (
              crew.job === "Characters" ||
              crew.job === "Screenplay" ||
              crew.job === "Director"
            ) {
              return (
                <div key={crew.id + crew.job}>
                  <h2>{crew.name}</h2>
                  <p>{crew.job}</p>
                </div>
              );
            }
          })}
        </Crew>
      </Description>
    </Container>
  );
};
