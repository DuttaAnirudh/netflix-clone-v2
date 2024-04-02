import Carousel from "../Carousel";
import { API_URL_BASE_IMAGE } from "../../constants";

const ShowcaseRow = ({ title, data }) => {
  return (
    <div className="slider mb-4" id="recommend-slider">
      {/* RECOMMEND TITLE */}
      <h2 className="heading-secondary mb-2">{title}</h2>
      <div className="slider-row slider-box" id="weekly-trending">
        {/* CONTAINER RECOMMENED*/}
        {data?.map((item, i) => (
          <Carousel
            key={item.id || i}
            imageSrc={`${API_URL_BASE_IMAGE}${item.posterImg}`}
            movieName={item.title}
            rating={item.rating}
            year={item.year}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowcaseRow;
