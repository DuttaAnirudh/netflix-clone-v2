import RatingStar from "../assets/star.png";

const Carousel = ({ imageSrc, movieName, rating, year }) => {
  return (
    <div className="carousel__container">
      <img
        src={imageSrc}
        alt={`${movieName} poster`}
        className="carousel__img"
      />
      <div className="carousel__info-box">
        <h3 className="heading-tertiary carousel__title">{movieName}</h3>
        <div className="carousel__rating-year">
          <div className="carousel__rating">
            <img
              src={RatingStar}
              alt="star"
              className="carousel__rating-star"
            />
            <p className="paragraph paragraph--light">{rating}</p>
          </div>
          <p className="paragraph paragraph--light">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
