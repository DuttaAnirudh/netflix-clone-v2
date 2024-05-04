import { useDispatch, useSelector } from "react-redux";
import PlayCircle from "../../assets/play_circle.png";
import RatingStar from "../../assets/star.png";
import AddToListButton from "./AddToListButton";
import Button from "./Button";
import {
  addToMyList,
  deleteFromMyList,
  fetchDetailsAndAddToMyList,
} from "../../slices/myListSlice";

const MovieDetailTextbox = ({
  type = "primary",
  movieName,
  year,
  rating,
  genre,
  description,
  duration,
  buttonClickEvent,
  data,
}) => {
  const myList = useSelector((store) => store.myList.movieList);
  const dispatch = useDispatch();

  // Checking if the current movie is 'my list'
  const addedStatus = myList.some((movie) => movie.id === data.id);

  const handleAddToListPrimary = () => {
    const isInTheList = myList.some((item) => item.id === data.id);
    if (isInTheList) {
      dispatch(deleteFromMyList(data.id));
    }
    if (!isInTheList) {
      dispatch(fetchDetailsAndAddToMyList(data.id));
    }
  };

  const handleAddToListSecondary = () => {
    const isInTheList = myList.some((item) => item.id === data.id);
    if (isInTheList) {
      dispatch(deleteFromMyList(data.id));
    }
    if (!isInTheList) {
      dispatch(addToMyList(data));
    }
  };

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
          <AddToListButton
            onClickEvent={handleAddToListPrimary}
            addedStatus={addedStatus}
          />
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
          <AddToListButton
            onClickEvent={handleAddToListSecondary}
            addedStatus={addedStatus}
          />
        </div>
        <div className="paragraph">{genre?.join(", ")}</div>
        <p className={`paragraph  paragraph--light `}>{description}</p>
      </div>
    );
  }
};

export default MovieDetailTextbox;
