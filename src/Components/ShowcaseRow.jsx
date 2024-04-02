import Carousel from "./Carousel";

const ShowcaseRow = ({ title }) => {
  return (
    <div className="slider mb-4" id="recommend-slider">
      {/* RECOMMEND TITLE */}
      <h2 className="heading-secondary mb-2">{title}</h2>
      <div className="slider-row slider-box" id="weekly-trending">
        {/* CONTAINER RECOMMENED*/}
        {Array.from({ length: 10 }).map((_, i) => (
          <Carousel
            key={i}
            imageSrc={"/src/assets/slider-control.jpg"}
            movieName={" Puss in Boots: The Last Wish"}
            rating={"7.5"}
            year={"2021"}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowcaseRow;
