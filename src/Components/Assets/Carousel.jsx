import RatingStar from "../../assets/star.png";
import { useNavigate } from "react-router-dom";

const Carousel = ({
  id,
  imageSrc,
  movieName,
  rating,
  year,
  sectionClassName = "carousel",
}) => {
  const navigate = useNavigate();

  const navigateToMoviePage = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      className={`${sectionClassName}__container`}
      onClick={() => navigateToMoviePage(id)}
    >
      <img
        src={imageSrc}
        alt={`${movieName} poster`}
        className="carousel__img"
        loading="lazy"
      />
      <div className={`${sectionClassName}__info-box`}>
        <h3 className="heading-tertiary carousel__title">{movieName}</h3>
        <div className="carousel__rating-year">
          <div className="carousel__rating">
            <img
              src={RatingStar}
              alt="star"
              className="carousel__rating-star"
            />
            <p className="paragraph paragraph--light">{rating.toFixed(1)}</p>
          </div>
          <p className="paragraph paragraph--light">{year.split("-").at(0)}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
