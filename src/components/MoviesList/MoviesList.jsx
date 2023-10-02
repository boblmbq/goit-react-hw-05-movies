import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation()
  if (movies) {
    return (
      <ul>
        {movies.map(({ original_title: title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{from : location}}>{title}</Link>
          </li>
        ))}
      </ul>
    );
  }
};

export default MovieList;

// adult: false;
// backdrop_path: '/1syW9SNna38rSl9fnXwc9fP7POW.jpg';
// genre_ids: (3)[(28, 878, 12)];
// id: 565770;
// original_language: 'en';
// original_title: 'Blue Beetle';
// overview: 'Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.';
// popularity: 2868.214;
// poster_path: '/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg';
// release_date: '2023-08-16';
// title: 'Blue Beetle';
// video: false;
// vote_average: 7.1;
// vote_count: 989;
