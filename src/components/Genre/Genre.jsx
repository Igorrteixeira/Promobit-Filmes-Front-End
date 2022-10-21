import { useContext } from "react";
import { BASE_URL, key } from "../../constants/BASE_URL";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useRequestData } from "../../hooks/useRequestData";
import { TiDelete } from "react-icons/ti";
import {
  Container,
  ContainButton,
  Button,
  ActiveButton,
  SearchBy,
  Title,
} from "./styled";

export const Genre = () => {
  const { genre, setGenre } = useContext(GlobalStateContext);
  const genreMovie = useRequestData(
    [],
    `${BASE_URL}/genre/movie/list?${key}&language=pt-BR`
  ).data;

  const search = (id) => {
    if (!genre.includes(id)) {
      setGenre([...genre, id]);
    } else if (genre.includes(id)) {
      const newgenre = genre.filter((item) => item !== id);
      setGenre(newgenre);
    }
  };

  return (
    <Container>
      <Title>
        Milhões de filmes, séries e pessoas para descobrir. Explore já.
      </Title>
      <SearchBy>FILTRE POR:</SearchBy>
      <ContainButton>
        {genreMovie?.genres?.map((item) => {
          const active = genre.find((genreMovie) => genreMovie === item.id);
          return (
            <div key={item.id}>
              {active === undefined ? (
                <Button key={item.id} onClick={() => search(item.id)}>
                  {item.name}
                </Button>
              ) : (
                <ActiveButton key={item.id} onClick={() => search(item.id)}>
                  {item.name} <TiDelete color="white" size={"17px"} />
                </ActiveButton>
              )}
            </div>
          );
        })}
      </ContainButton>
    </Container>
  );
};
