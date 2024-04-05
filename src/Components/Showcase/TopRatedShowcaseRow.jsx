import { useState, useEffect } from "react";
import ShowcaseRow from "./ShowcaseRow";
import { API_URL, KEY } from "../../constants";

const TopRatedShowcaseRow = ({ setSelectedMovieId }) => {
  const [topRatedMovies, setTopRatedMovies] = useState(null);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const res = await fetch(`${API_URL}/top_rated?api_key=${KEY}`);

        const data = await res.json();

        const moviesData = data.results.map((movie) => {
          return {
            id: movie.id,
            title: movie.title,
            year: movie.release_date,
            rating: movie.vote_average,
            posterImg: movie.poster_path,
          };
        });

        setTopRatedMovies(moviesData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTopRatedMovies();
  }, []);

  return (
    <ShowcaseRow
      title={"Top Rated Movies"}
      data={topRatedMovies}
      setSelectedMovieId={setSelectedMovieId}
    />
  );
};

export default TopRatedShowcaseRow;
