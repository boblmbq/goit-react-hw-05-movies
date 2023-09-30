import MovieList from 'components/MoviesList/MoviesList';
import MovieSearch from 'components/MovieSearch';
import { useSearchParams } from 'react-router-dom';
import { useEffect,  useState } from 'react';
import { getMoviesByName } from 'api/api';

const Movies = () => {
  const [urlParams, setUrlParams] = useSearchParams();
  const [findedMovies, setFindedMovies] = useState([]);

  const movieName = urlParams.get('search');

  function handlerSubmit(movieName) {
    setUrlParams({ search: movieName.trim() });
  }

  useEffect(() => {
    if (!movieName) return;
    async function findMovies() {
      try {
        const moviesArray = await getMoviesByName(movieName);
        setFindedMovies(moviesArray);
      } catch (error) {
        console.log(error);
      }
    }

    findMovies();
  }, [movieName]);

  return (
    <>
      <MovieSearch submitHandle={handlerSubmit} />
      {movieName && findedMovies.length > 1 && (
        <MovieList movies={findedMovies} />
      )}

      {movieName && !findedMovies.length && <h1>Sorry we found nothing</h1>}
    </>
  );
};

export default Movies;
