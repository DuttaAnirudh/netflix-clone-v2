import SliderControlImg from "../assets/slider-control.jpg";

const HeroSlider = () => {
  return (
    <div className="banner-slider">
      <div className="slider mb-4">
        <div className="banner-row slider-box">
          <div className="banner__img-container">
            <img
              src={SliderControlImg}
              alt="recommend image"
              className="banner__img"
            />
          </div>

          <div className="banner__img-container active">
            <img
              src={SliderControlImg}
              alt="recommend image"
              className="banner__img"
            />
          </div>
          <div className="banner__img-container">
            <img
              src={SliderControlImg}
              alt="recommend image"
              className="banner__img"
            />
          </div>

          <div className="banner__img-container active">
            <img
              src={SliderControlImg}
              alt="recommend image"
              className="banner__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
