import TopRatedShowcaseRow from "./TopRatedShowcaseRow";
import TrendingShowcaseRow from "./TrendingShowcaseRow";

const ShowcaseBox = ({ setSelectedMovieId }) => {
  return (
    <section className="section-recommend">
      {/* SLIDER CONTAINER */}
      <TrendingShowcaseRow
        title={"Weekly Trending"}
        setSelectedMovieId={setSelectedMovieId}
      />

      {/* SLIDER CONTAINER */}
      <TopRatedShowcaseRow
        title={"Top Rated Movies"}
        setSelectedMovieId={setSelectedMovieId}
      />
    </section>
  );
};

export default ShowcaseBox;
