import Carousel from "./Carousel";
import { API_URL_BASE_IMAGE } from "../../utils/helpers";

const MovieListBox = ({ className, data }) => {
  return (
    <section className={`grid-list ${className || ""}`}>
      {data?.map(
        (item, i) =>
          item.posterImg && (
            <Carousel
              key={item.id || i}
              id={item.id}
              imageSrc={`${API_URL_BASE_IMAGE}${item.posterImg}`}
              movieName={item.title}
              rating={item.rating}
              year={item.year}
              sectionClassName="grid"
            />
          )
      )}
    </section>
  );
};

export default MovieListBox;
