import {
  DescrTitleWrapper,
  HTwoTtitle,
  TextDescrWrapper,
  TextGendresWrapper,
  TextWrapper,
  Title,
  UlStyled,
} from './MovieTextDescr.styled';

const MovieTextDescr = ({ title, rating, description, genres }) => {
  return (
    <TextDescrWrapper>
      <Title>{title}</Title>

      <DescrTitleWrapper>
        <HTwoTtitle>User Score:</HTwoTtitle>
        <TextWrapper props={6}>{rating.toFixed(1)}</TextWrapper>
      </DescrTitleWrapper>

      {genres.length > 1 && (
        <DescrTitleWrapper>
          <HTwoTtitle>Genres:</HTwoTtitle>
          <UlStyled props={6}>
            {genres.map(({ name }) => (
              <li key={name}>
                <TextGendresWrapper fSize={5}>{name},</TextGendresWrapper>
              </li>
            ))}
          </UlStyled>
        </DescrTitleWrapper>
      )}

      <DescrTitleWrapper gap={15}>
        <HTwoTtitle>Overview:</HTwoTtitle>
        <p>{description}</p>
      </DescrTitleWrapper>
    </TextDescrWrapper>
  );
};

export default MovieTextDescr;
