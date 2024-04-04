import PlayCircle from "../assets/play_circle.png";
import RatingStar from "../assets/star.png";
import Button from "./Button";

const MovieDetailTextbox = ({
  sectionClassName = "details",
  movieName,
  year,
  rating,
  genre,
  description,
  duration,
  director,
  cast,
  button = false,
}) => {
  return (
    <div className={`${sectionClassName}__text-box`}>
      <h1 className="heading-primary">{movieName}</h1>

      {sectionClassName === "movie" ? (
        <div className={`${sectionClassName}__stats`}>
          <div className={`${sectionClassName}__rating`}>
            <img
              src={RatingStar}
              alt="star"
              className={`${sectionClassName}__rating-star`}
            />
            <p className="paragraph">{rating?.toFixed(1)}</p>
          </div>
          <p className="paragraph">{duration}m</p>
          <p className="paragraph">{year?.split("-").at(0)}</p>
          <p className="paragraph paragraph--light">PG-13</p>
        </div>
      ) : (
        <div className={`${sectionClassName}__year-rating`}>
          <p className="paragraph">{year?.split("-").at(0)}</p>
          <p className="paragraph paragraph--light">{rating?.toFixed(1)}</p>
        </div>
      )}

      <div className="paragraph">{genre?.join(", ")}</div>
      <p
        className={`paragraph ${
          sectionClassName === "movie" ? "paragraph--light" : "mb-2"
        } `}
      >
        {description}
      </p>
      {cast && (
        <div className={`${sectionClassName}__cast`}>
          <p className="paragraph">Starring</p>
          <p className="paragraph paragraph--light">{cast}</p>
        </div>
      )}

      {director && (
        <div className={`${sectionClassName}__cast mb-4`}>
          <p className="paragraph">Directed By</p>
          <p className="paragraph paragraph--light">{director}</p>
        </div>
      )}

      {button && (
        <Button
          classNameBtn={`${sectionClassName}__btn`}
          imageSrc={PlayCircle}
          classNameImg={`${sectionClassName}__btn-img`}
          alt={"Watch Now Button"}
        >
          Watch Now
        </Button>
      )}
    </div>
  );
};

export default MovieDetailTextbox;
