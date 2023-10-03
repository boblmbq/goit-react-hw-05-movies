import { getMovieById } from 'api/api';
import MovieImage from 'components/MovieImage';
import MovieTextDescr from 'components/MovieTextDescr';
import defaultImg from 'components/default_img';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import arrow from '../../svg/arrow.svg';
import {
  MovieDescriptionWrapper,
  Paddings,
  ReturnLink,
} from './MovieDescription.styled';

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
    <Paddings>
      <ReturnLink to={returnBackLink.current}>
        <img src={arrow} alt="return back" />
      </ReturnLink>
      <div>
        <MovieDescriptionWrapper>
          <MovieImage src={movieImage} descr={movieInfo.original_title} />
          <MovieTextDescr
            title={original_title}
            rating={vote_average}
            description={overview}
            genres={genres}
          />
        </MovieDescriptionWrapper>
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
      </div>
      <Outlet />
    </Paddings>
  );
};

export default MovieDescription;
