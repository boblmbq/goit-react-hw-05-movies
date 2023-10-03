import { Div } from "./MovieImage.styled";

const MovieImage = ({src, descr}) => {
  return (
    <Div>
      <img src={src} alt={descr} width={250} />
    </Div>
  );
};

export default MovieImage;
