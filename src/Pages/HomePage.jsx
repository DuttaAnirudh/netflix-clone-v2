import Hero from "../Components/Hero/Hero";
import TopRatedShowcaseRow from "../Components/Hero/TopRatedShowcaseRow";
import TrendingShowcaseRow from "../Components/Hero/TrendingShowcaseRow";

const HomePage = ({ genreList, setSelectedMovieId }) => {
  return (
    <>
      <Hero genreList={genreList} setSelectedMovieId={setSelectedMovieId} />
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
    </>
  );
};

export default HomePage;
