import {
  DescrTitleWrapper,
  TextDescrWrapper,
  TextWrapper,
  Title,
  UlStyled,
} from './MovieTextDescr.styled';

const MovieTextDescr = ({ title, rating, description, genres }) => {
  return (
    <TextDescrWrapper>
      <Title>{title}</Title>

      <DescrTitleWrapper >
        <h2>User Score:</h2>
        <TextWrapper props={6}>{rating.toFixed(1)}</TextWrapper>
      </DescrTitleWrapper>

      {genres.length > 1 && (
        <DescrTitleWrapper>
          <h2>Genres:</h2>
          <UlStyled props={6}>
            {genres.map(({ name }) => (
              <li key={name}>{name},</li>
            ))}
          </UlStyled>
        </DescrTitleWrapper>
      )}

      <DescrTitleWrapper gap={15}>
        <h2>Overview:</h2>
        <p>{description}</p>
      </DescrTitleWrapper>
    </TextDescrWrapper>
  );
};

export default MovieTextDescr;
