import { getMovieCast } from 'api/api';
import defaultImg from 'constants/default_img';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UlStyled } from './MovieCast.styled';

export const MovieCast = () => {
  const [castList, setCastList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function movieCast() {
      try {
        const data = await getMovieCast(id);
        const { cast } = data;
        setCastList(cast);
      } catch (error) {
        console.log(error);
      }
    }
    movieCast();
  }, [id]);

  return (
    <UlStyled>
      {castList.map(({ character, name, profile_path }) => (
        <li key={name}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : defaultImg
            }
            alt={name}
            width={250}
          />
          <h2>{character}</h2>
        </li>
      ))}
    </UlStyled>
  );
};

