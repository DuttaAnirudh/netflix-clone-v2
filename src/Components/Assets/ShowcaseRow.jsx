import Carousel from "./Carousel";
import { API_URL_BASE_IMAGE } from "../../constants";
import SliderContainer from "./SliderContainer";

const ShowcaseRow = ({ title, data, setSelectedMovieId }) => {
  return (
    <div className="slider mb-4" id="recommend-slider">
      {/* RECOMMEND TITLE */}
      <h2 className="heading-secondary mb-2">{title}</h2>

      {/* SLIDER */}
      <SliderContainer className={"slider-row"}>
        {/* CONTAINER RECOMMENED*/}
        {data?.map((item, i) => (
          <Carousel
            key={item.id || i}
            id={item.id}
            imageSrc={`${API_URL_BASE_IMAGE}${item.posterImg}`}
            movieName={item.title}
            rating={item.rating}
            year={item.year}
            setSelectedMovieId={setSelectedMovieId}
          />
        ))}
      </SliderContainer>
    </div>
  );
};

export default ShowcaseRow;
