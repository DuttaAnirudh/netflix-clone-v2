import { useLoaderData } from "react-router-dom";
import Hero from "../Components/Hero/Hero";
import TopRatedShowcaseRow from "../Components/Hero/TopRatedShowcaseRow";
import TrendingShowcaseRow from "../Components/Hero/TrendingShowcaseRow";
import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMoviesList,
} from "../services/apiRequests";

const HomePage = ({ genreList, setSelectedMovieId }) => {
  const { popularMovies, topRatedMovies, trendingMovies } = useLoaderData();

  return (
    <>
      <Hero
        genreList={genreList}
        setSelectedMovieId={setSelectedMovieId}
        popularMovies={popularMovies}
      />
      <section className="section-recommend">
        {/* SLIDER CONTAINER */}
        <TrendingShowcaseRow
          title={"Weekly Trending"}
          setSelectedMovieId={setSelectedMovieId}
          trendingMovies={trendingMovies}
        />

        {/* SLIDER CONTAINER */}
        <TopRatedShowcaseRow
          title={"Top Rated Movies"}
          setSelectedMovieId={setSelectedMovieId}
          topRatedMovies={topRatedMovies}
        />
      </section>
    </>
  );
};

export const loader = async () => {
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  const trendingMovies = await getTrendingMoviesList();

  return { popularMovies, topRatedMovies, trendingMovies };
};

export default HomePage;
