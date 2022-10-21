import { Movies, Pages, Container } from "./styled";
import { BASE_URL, key } from "../../constants/BASE_URL";
import { CardMovies } from "../../components/CardMovies/CardMovies";
import { FormatDate } from "../../services/FormatDate";
import { Header } from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import PaginationControlled from "../../components/Pagination/Pagination";
import { GetMovies } from "../../services/GetMovies";
import { Genre } from "../../components/Genre/Genre";
import { goToDetails } from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const { genre, page } = useContext(GlobalStateContext);

  const moviesPopular = GetMovies(
    `${BASE_URL}/movie/popular?${key}&language=pt-BR&page=${page}`
  );
  const listMovies = moviesPopular?.map((movie) => {
    const date = movie.release_date.split("-");
    const month = FormatDate(movie.release_date);
    const newDate = `${date[2]} ${month} ${date[0]}`;
    if (genre.length < 1) {
      return (
        <div key={movie.id}>
          <CardMovies
            id={movie.id}
            title={movie.title}
            date={newDate}
            backDrop={movie.poster_path}
          />
        </div>
      );
    } else {
      const teste = genre.some((item) => movie.genre_ids.includes(item));
      if (teste) {
        return (
          <div key={movie.id}>
            <CardMovies
              id={movie.id}
              title={movie.title}
              date={newDate}
              backDrop={movie.poster_path}
            />
          </div>
        );
      }
    }
  });
  return (
    <Container>
      <Header genres={<Genre />} />
      <Movies>{listMovies}</Movies>
      <Pages>
        <PaginationControlled />
      </Pages>
    </Container>
  );
};
