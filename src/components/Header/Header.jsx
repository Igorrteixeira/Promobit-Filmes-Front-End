import { useNavigate } from "react-router-dom";
import { goToHome } from "../../router/Coordinator";
import { Container, TopHeader, TextTopHeader } from "./styled";

export const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <TopHeader>
        <TextTopHeader onClick={() => goToHome(navigate)}>
          <h1>TMDB </h1>
          <span></span>
        </TextTopHeader>
      </TopHeader>
      {props.genres}
      {props.details}
    </Container>
  );
};
