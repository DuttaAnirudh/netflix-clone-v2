import TopRatedShowcaseRow from "./TopRatedShowcaseRow";
import TrendingShowcaseRow from "./TrendingShowcaseRow";

const ShowcaseBox = () => {
  return (
    <section className="section-recommend">
      {/* SLIDER CONTAINER */}
      <TrendingShowcaseRow title={"Weekly Trending"} />

      {/* SLIDER CONTAINER */}
      <TopRatedShowcaseRow title={"Top Rated Movies"} />
    </section>
  );
};

export default ShowcaseBox;
