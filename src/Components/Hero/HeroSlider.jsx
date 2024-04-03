import { API_URL_BASE_IMAGE } from "../../constants";

const HeroSlider = ({ data, bannerMovieName, handleBannerMovie }) => {
  return (
    <div className="banner-slider">
      <div className="slider mb-4">
        <div className="banner-row slider-box">
          {data?.map((item, i) => (
            <div
              className={`banner__img-container ${
                bannerMovieName === item.title ? "active" : ""
              }`}
              key={item.id || i}
              onClick={() => handleBannerMovie(item.id)}
            >
              <img
                src={`${API_URL_BASE_IMAGE}${item.posterImg}`}
                alt="recommend image"
                className="banner__img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
