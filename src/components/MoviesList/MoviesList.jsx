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
  TitleRatingWrapper,
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
                  <TitleRatingWrapper>
                    <MovieTitle>{title}</MovieTitle>
                    <MovieRating>{vote_average}</MovieRating>
                  </TitleRatingWrapper>

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

// adult: false;
// backdrop_path: '/1syW9SNna38rSl9fnXwc9fP7POW.jpg';
// genre_ids: (3)[(28, 878, 12)];
// id: 565770;
// original_language: 'en';
// original_title: 'Blue Beetle';
// overview: 'Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.';
// popularity: 2868.214;
// poster_path: '/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg';
// release_date: '2023-08-16';
// title: 'Blue Beetle';
// video: false;
// vote_average: 7.1;
// vote_count: 989;
