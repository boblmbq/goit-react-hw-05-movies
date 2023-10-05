import { useLocation } from 'react-router-dom';
import defaultImg from 'constants/default_img';
import {
  Img,
  MovieCard,
  MovieDesriptionWrapper,
  MovieLink,
  MovieOverview,
  MovieOverviewTitle,
  MovieOverviewWrapper,
  MovieRating,
  MovieTitle,
  Ul,
} from './MovieList.styled';
import { maxSymbols } from 'utils/max_symbols';

const MovieList = ({ movies }) => {
  const location = useLocation();

  if (movies) {
    return (
      <Ul>
        {movies.map(
          ({
            original_title: title,
            id,
            poster_path: image,
            vote_average,
            overview,
          }) => (
            <MovieCard key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <Img
                  src={
                    image
                      ? `https://image.tmdb.org/t/p/w500/${image}`
                      : defaultImg
                  }
                  alt={title}
                />
                <MovieDesriptionWrapper>
                    <MovieTitle>{title}</MovieTitle>
                    <MovieRating>{vote_average}</MovieRating>
                  <MovieOverviewWrapper>
                    <MovieOverviewTitle>Description:</MovieOverviewTitle>
                    <MovieOverview>{maxSymbols(overview)}</MovieOverview>
                  </MovieOverviewWrapper>
                </MovieDesriptionWrapper>
              </MovieLink>
            </MovieCard>
          )
        )}
      </Ul>
    );
  }
};

export default MovieList;
