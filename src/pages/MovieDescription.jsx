import { getMovieById } from 'api/api';
import MovieImage from 'components/MovieImage';
import MovieTextDescr from 'components/MovieTextDescr';
import defaultImg from 'components/default_img';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDescription = () => {
  const [movieImage, setMovieImage] = useState('');
  const [movieInfo, setMovieInfo] = useState({
    genres: [],
    original_title: '',
    overview: '',
    vote_average: 0,
  });

  const { id } = useParams();
  const { state } = useLocation();
  const returnBackLink = useRef(state?.from ?? '/movies');

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
      <Link to={returnBackLink.current}>return back</Link>
      <MovieTextDescr
        title={original_title}
        rating={vote_average}
        description={overview}
        genres={genres}
      />
      <MovieImage src={movieImage} descr={movieInfo.original_title} />

      <ul>
        <li>
          <Link to="carts" state={id}>
            Carts
          </Link>
        </li>
        <li>
          <Link to="review" state={id}>
            Review
          </Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default MovieDescription;
