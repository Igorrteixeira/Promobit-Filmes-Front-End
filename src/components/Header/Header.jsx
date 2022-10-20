import {
  Container,
  TopHeader,
  TextTopHeader,
} from "./styled";

export const Header = (props) => {
  return (
    <Container>
       <TopHeader>
        <TextTopHeader>
          TMDB <div></div>
        </TextTopHeader>
      </TopHeader>
      {props.genres}
      {props.details}
    </Container>
  );
};
