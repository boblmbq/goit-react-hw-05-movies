import { getMovieReviews } from 'api/api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { postDateFormating } from 'utils/date_format';

const MovieReview = () => {
  const [reviews, setReviews] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    async function getReviews() {
      const review = await getMovieReviews(state);
      const { results } = review;
      setReviews(results);
    }
    getReviews();
  }, [state]);
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

// author
// :
// "scherbakovx"
// author_details
// :
// {name: '', username: 'scherbakovx', avatar_path: null, rating: 8}
// content
// :
// "Movie is really good, but there is one obvious flaw and one important condition:\r\n\r\nFlaw: you'll have to endure every scene about Jann's relationships. With the parents it's just very predictable — just try to imagine, they didn't believe in him and persuaded to drop his dreams and find proper job. Of course, you know what will happen in the end. Okay, relationships with parents are always important, but WHY DID THEY ADD SCENES WITH THE GIRLFRIEND? Thanks for showing Tokyo during their weekend there, but I still can't understand the reason to add her in the first place — they didn't have conflicts, interesting dialogues or even support, really. I'm sure creators could invest time to more interesting and important topics.\r\n\r\nBut anyway, this flaw disappears in the shadow of other, actually important stuff. Racing.\r\n\r\nSo yeah, let's return to the condition: you have to love it when cars go BRRRRR. The main reason behind this movie is to sell you GT7 for your PS5, and believe me, after leaving the cinema, you'll at least check if there are any discounts for the game right now (yes, there are). Sound, shooting angles, tension during races — everything works perfectly and beyond! Just when you become bored, you'll be in for a surprise. When you want a new angle, you'll get it. When you forget who the sponsor of the movie is, you'll see graphics from the video game.\r\n\r\nSo, just believe me, if you love races, you have to go to the movie right now. Just select cinema with quality sound, please :)\r\n\r\nAnd as a bonus, you'll get David Harbour, who's stealing absolutely every scene. Love him!"
// created_at
