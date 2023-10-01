import { getMovieCast } from 'api/api';
import defaultImg from 'utils/default_img';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MovieCast = () => {
  const [castList, setCastList] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    async function movieCast() {
      try {
        const data = await getMovieCast(state);
        const { cast } = data;
        setCastList(cast);
      } catch (error) {
        console.log(error);
      }
    }
    movieCast();
  }, [state]);

  return (
    <ul>
      {castList.map(({ character, name, profile_path }) => (
        <li key={name}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : defaultImg
            }
            alt={name}
            width={200}
          />
          <h2>{character}</h2>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;

// character: 'Ethan Hunt';
// name: 'Tom Cruise';
// profile_path: '/8qBylBsQf4llkGrWR3qAsOtOU8O.jpg';
