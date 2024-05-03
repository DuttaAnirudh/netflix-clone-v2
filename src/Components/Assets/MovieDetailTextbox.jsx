import PlayCircle from "../../assets/play_circle.png";
import RatingStar from "../../assets/star.png";
import AddToListButton from "./AddToListButton";
import Button from "./Button";

const MovieDetailTextbox = ({
  type = "primary",
  movieName,
  year,
  rating,
  genre,
  description,
  duration,
  buttonClickEvent,
}) => {
  // HOME PAGE
  if (type === "primary") {
    return (
      <div className={`details__text-box`}>
        <h1 className="heading-primary">{movieName}</h1>
        <div className={`details__year-rating`}>
          <p className="paragraph">{year?.split("-").at(0)}</p>
          <p className="paragraph paragraph--light">{rating?.toFixed(1)}</p>
        </div>
        <div className="paragraph">{genre?.join(", ")}</div>
        <p className={`paragraph  mb-2`}>{description}</p>
        <div className="details__btn-row">
          <Button
            classNameBtn={`details__btn`}
            imageSrc={PlayCircle}
            classNameImg={`details__btn-img`}
            alt={"Watch Now Button"}
            onClickEvent={buttonClickEvent}
          >
            Watch Now
          </Button>
          <AddToListButton />
        </div>
      </div>
    );
  }

  // DETAILS PAGE
  if (type === "secondary") {
    return (
      <div className={`movie__text-box`}>
        <h1 className="heading-primary">{movieName}</h1>

        <div className={`movie__stats`}>
          <div className={`movie__rating`}>
            <img src={RatingStar} alt="star" className={`movie__rating-star`} />
            <p className="paragraph">{rating?.toFixed(1)}</p>
          </div>
          <p className="paragraph">{duration}m</p>
          <p className="paragraph">{year?.split("-").at(0)}</p>
          <p className="paragraph paragraph--light">PG-13</p>
          <AddToListButton />
        </div>
        <div className="paragraph">{genre?.join(", ")}</div>
        <p className={`paragraph  paragraph--light `}>{description}</p>
      </div>
    );
  }
};

export default MovieDetailTextbox;
