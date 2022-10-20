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
} from "./style";

export const DetailHeader = (props) => {
  const hour = ConvertHour(props.runTime);
  const voteAverage = String(props.voteAverage)
    .replace(/\D+/g, "")
    .substr(0, 2);

  return (
    <Container>
      <ImageMovie src={IMG_URL + props.img} alt="" />
      <Description>
        <h1>
          {props.title} ({props.year && props.year.substr(0, 4)})
        </h1>
        <DateAndTime>
          {props.releaseDates?.results?.map((item) => {
            if (item.iso_3166_1 === "BR") {
              const date = FormatDateBr(
                item.release_dates[0].release_date
              ).split("-");
              return (
                <Date key={props.id}>
                  <p>{item.release_dates[0].certification} anos •</p>
                  <p>{date}</p>
                  <p>({item.iso_3166_1}) •</p>
                </Date>
              );
            }
          })}
          {props?.genres?.map((genre) => {
            return <p key={genre.id}>{genre.name} </p>;
          })}
          <p>
            • {hour.textHoras}h {hour.textrunTime}m{" "}
          </p>
        </DateAndTime>
        <VoteAverage>
          <Average>
            <CircularProgress
              variant="determinate"
              value={Number(voteAverage)}
              id={"progress"}
              size={"60px"}
            />
            {voteAverage}%
          </Average>
          <p>Avaliação dos usuários</p>
        </VoteAverage>
        <Sinopse>
          <h2>Sinopse</h2>
          <p>{props.overview}</p>
        </Sinopse>
        <Crew>
          {props?.credits?.map((crew) => {
            if (
              crew.job === "Characters" ||
              crew.job === "Screenplay" ||
              crew.job === "Director"
            ) {
              return (
                <div key={crew.id}>
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
