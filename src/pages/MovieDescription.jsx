import { getMovieById } from 'api/api';
import MovieImage from 'components/MovieImage';
import MovieTextDescr from 'components/MovieTextDescr';
import defaultImg from 'utils/default_img';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDescription = () => {
  const [movieImage, setMovieImage] = useState('');
  const [movieInfo, setMovieInfo] = useState({
    genres: [],
    original_title: '',
    overview: '',
    vote_average: 0,
  });

  const { id } = useParams();

  useEffect(() => {
    async function getMovie(id) {
      const movie = await getMovieById(id);
      const { poster_path, genres, original_title, overview, vote_average } =
        movie;
      setMovieImage(
        poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : defaultImg
      );
      setMovieInfo({ genres, original_title, overview, vote_average });
    }
    getMovie(id);
  }, [id]);

  const { genres, original_title, overview, vote_average } = movieInfo;

  return (
    <>
      <MovieTextDescr
        title={original_title}
        rating={vote_average}
        description={overview}
        genres={genres}
      />
      <MovieImage src={movieImage} descr={movieInfo.original_title} />
      <Link to="carts" state={id}>
        carts
      </Link>
      <Link to="review" state={id}>
        review
      </Link>

      <Outlet />
    </>
  );
};

export default MovieDescription;

// poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"

// genres: (3) [{…}, {…}, {…}]

// original_title: "John Wick: Chapter 4"

// overview: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."

// vote_average: 7.814

// const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

// <img src={
//  movieData.poster_path ?
//  `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
//  : defaultImg
// }
// width={250}
// alt="poster"
// />
