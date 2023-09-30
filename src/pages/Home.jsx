import { getPopularMovies } from 'api/api';
import MovieList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    try {
      async function getMovies() {
        const array = await getPopularMovies();
        setPopularMovies(array);
      }
      getMovies();
    } catch (error) {
      console.log(error);
    }

    return () => {
      setPopularMovies([]);
    };
  }, []);

  return <MovieList movies={popularMovies} />;
};
export default Home;
