import { getMovieById } from 'api/api';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDescription = () => {
  const { id } = useParams();

  useEffect(() => {
    async function getMovie(id) {
      const movie = await getMovieById(id);
      console.log(movie);
      return movie;
    }
    getMovie(id);
  }, [id]);
};

export default MovieDescription;



// backdrop_path: "/i3OTGmLNOZIo4SRQLVfLjeWegB6.jpg"

// genres: (3) [{…}, {…}, {…}]

// original_title: "John Wick: Chapter 4"

// overview: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."

// poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"

// vote_average: 7.814
