import { API_URL_BASE_IMAGE } from "../../utils/helpers";
import SliderContainer from "../Assets/SliderContainer";

const HeroSlider = ({ data, bannerMovieName, handleBannerMovie }) => {
  return (
    <div className="banner-slider">
      <div className="slider mb-4">
        {/* SLIDER */}
        <SliderContainer className={"banner-row"}>
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
        </SliderContainer>
      </div>
    </div>
  );
};

export default HeroSlider;
