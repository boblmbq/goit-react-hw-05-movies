import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import MovieDescription from 'pages/MovieDescription';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDescription />} />
      </Route>
    </Routes>
  );
};
