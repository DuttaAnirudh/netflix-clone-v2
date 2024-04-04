import Carousel from "./Carousel";
import { API_URL_BASE_IMAGE } from "../constants";

const MovieListBox = ({ data }) => {
  return (
    <section className="grid-list">
      {data?.map(
        (item, i) =>
          item.posterImg && (
            <Carousel
              key={item.id || i}
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
