const MovieImage = ({src, descr}) => {
  return (
    <div>
      <img src={src} alt={descr} width={250} />
    </div>
  );
};

export default MovieImage;
