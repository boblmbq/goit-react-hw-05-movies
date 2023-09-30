import axios from 'axios';

const KEY = '05daa517baabbb59954a8442a1286030';

const BASE_URL = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

export const getPopularMovies = async () => {
  const {
    data: { results },
  } = await BASE_URL.get(
    `discover/movie?api_key=${KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
  );

  return results;
};

export const getMoviesByName = async name => {
  const {
    data: { results },
  } = await BASE_URL.get(`search/movie?api_key=${KEY}&query=${name}`);
  return results;
};

export const getMovieById = async id => {
  const { data } = await BASE_URL.get(`/movie/${id}?api_key=${KEY}`);
  return data;
};
