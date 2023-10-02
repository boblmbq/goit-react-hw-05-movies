import { getMovieReviews } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postDateFormating } from 'utils/date_format';

const MovieReview = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getReviews() {
      const review = await getMovieReviews(id);
      const { results } = review;
      setReviews(results);
    }
    getReviews();
  }, [id]);

  return (
    <ul>
      {reviews.map(({ author, content, created_at }) => (
        <li key={author}>
          <h2>{author}</h2>
          <p>{content}</p>
          <time dateTime={created_at}>{postDateFormating(created_at)}</time>
        </li>
      ))}
    </ul>
  );
};

export default MovieReview;