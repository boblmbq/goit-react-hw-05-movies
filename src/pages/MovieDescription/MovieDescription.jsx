import { getMovieById } from 'api/api';
import MovieImage from 'components/MovieImage';
import MovieTextDescr from 'components/MovieTextDescr';
import defaultImg from 'constants/default_img';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import arrow from '../../svg/arrow.svg';
import {
  CustomLi,
  MovieDescriptionWrapper,
  Paddings,
  ReturnLink,
  UlStyled,
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
      <MovieDescriptionWrapper>
        <div>
          <MovieImage src={movieImage} descr={movieInfo.original_title} />
          <UlStyled>
            <CustomLi fSize={6}>
              <Link to="carts" state={id}>
                Carts
              </Link>
            </CustomLi>
            <CustomLi fSize={6}>
              <Link to="review" state={id}>
                Review
              </Link>
            </CustomLi>
          </UlStyled>
        </div>
        <MovieTextDescr
          title={original_title}
          rating={vote_average}
          description={overview}
          genres={genres}
        />
      </MovieDescriptionWrapper>

      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </Paddings>
  );
};

export default MovieDescription;
