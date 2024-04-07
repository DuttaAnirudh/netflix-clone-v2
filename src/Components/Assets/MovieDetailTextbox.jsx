import PlayCircle from "../../assets/play_circle.png";
import RatingStar from "../../assets/star.png";
import Button from "./Button";

const MovieDetailTextbox = ({
  sectionClassName = "details",
  movieName,
  year,
  rating,
  genre,
  description,
  duration,
  button = false,
  buttonClickEvent,
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

      {button && (
        <Button
          classNameBtn={`${sectionClassName}__btn`}
          imageSrc={PlayCircle}
          classNameImg={`${sectionClassName}__btn-img`}
          alt={"Watch Now Button"}
          onClickEvent={buttonClickEvent}
        >
          Watch Now
        </Button>
      )}
    </div>
  );
};

export default MovieDetailTextbox;
