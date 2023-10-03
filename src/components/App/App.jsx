import SharedLayout from 'components/SharedLayout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDescription = lazy(() =>
  import('../../pages/MovieDescription/MovieDescription')
);

// ці два написав так просто, щоб запам'ятати цей метод імпорту
const MovieCast = lazy(() =>
  import('../MovieCast/MovieCast').then(module => ({
    ...module,
    default: module.MovieCast,
  }))
);
const MovieReview = lazy(() =>
  import('../MovieReview/MovieReview').then(module => ({
    ...module,
    default: module.MovieReview,
  }))
);

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
