const MovieTextDescr = ({ title, rating, description, genres }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>User Score: {Math.ceil(rating * 10)}</p>
      <h2>Overview</h2>
      <p>{description}</p>

      {genres.length > 1 && (
        <>
          <h3>Genres</h3>
          <ul>
            {genres.map(e => (
              <li>{e}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MovieTextDescr;
