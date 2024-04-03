import PlayCircle from "../assets/play_circle.png";
import Button from "./Button";

const MovieDetailTextbox = ({
  movieName,
  year,
  rating,
  genre,
  description,
  button = false,
}) => {
  return (
    <div className="banner__text-box">
      <h1 className="heading-primary">{movieName}</h1>
      <div className="banner__year-rating">
        <p className="paragraph">{year?.split("-").at(0)}</p>
        <p className="paragraph paragraph--light">{rating?.toFixed(1)}</p>
      </div>
      <div className="paragraph">{genre?.join(", ")}</div>
      <p className="paragraph mb-2">{description}</p>

      {button && (
        <Button
          classNameBtn={"banner__btn"}
          imageSrc={PlayCircle}
          classNameImg={"banner__btn-img"}
          alt={"Watch Now Button"}
        >
          Watch Now
        </Button>
      )}
    </div>
  );
};

export default MovieDetailTextbox;
