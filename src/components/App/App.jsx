import MovieCast from 'components/MovieCast';
import MovieReview from 'components/MovieReview';
import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import MovieDescription from 'pages/MovieDescription/MovieDescription';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDescription />}>
          <Route path="carts" element={<MovieCast />} />
          <Route path="review" element={<MovieReview />} />
        </Route>
      </Route>
    </Routes>
  );
};
