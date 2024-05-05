import { useLoaderData } from "react-router-dom";
import Hero from "../Components/Hero/Hero";
import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMoviesList,
  getUpcomingMovies,
} from "../services/apiHomepage";
import MenuTab from "../Components/Assets/MenuTab";
import ShowcaseRow from "../Components/Assets/ShowcaseRow";

const HomePage = () => {
  const { popularMovies, topRatedMovies, trendingMovies, upComingMovies } =
    useLoaderData();

  return (
    <>
      <MenuTab title="Categories" />
      <Hero popularMovies={popularMovies} />
      <section className="section-recommend">
        {/* SLIDER CONTAINER */}
        <ShowcaseRow title={"🍿 Everyone's Watching"} data={trendingMovies} />

        {/* SLIDER CONTAINER */}
        <ShowcaseRow title={"🔥 New & Hot"} data={upComingMovies} />

        {/* SLIDER CONTAINER */}
        <ShowcaseRow title={"⭐ Top Rated Ever"} data={topRatedMovies} />
      </section>
    </>
  );
};

export const loader = async () => {
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  const trendingMovies = await getTrendingMoviesList();
  const upComingMovies = await getUpcomingMovies();

  return { popularMovies, topRatedMovies, trendingMovies, upComingMovies };
};

export default HomePage;
