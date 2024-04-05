import { useEffect, useState } from "react";
import MovieListBox from "./MovieListBox";
import { API_URL_SEARCH, KEY } from "../constants";

const ResultsPage = ({ searchValue, setSelectedMovieId }) => {
  const [searchMovieList, setSearchMovieList] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchSearchedMovieList = async () => {
      try {
        if (searchValue.length <= 2) return;

        const res = await fetch(
          `${API_URL_SEARCH}?query=${searchValue}&api_key=${KEY}`
        );
        const data = await res.json();

        const movieData = data.results.map((movie) => {
          return {
            id: movie.id,
            title: movie.title,
            year: movie.release_date,
            rating: movie.vote_average,
            posterImg: movie.poster_path,
          };
        });

        setSearchMovieList(movieData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSearchedMovieList();

    return () => {
      controller.abort();
    };
  }, [searchValue]);

  return (
    <>
      {/* SEARCH QUERY INPUT DETAILS */}
      <section className="section-query-details mb-4">
        <p className="paragrapgh paragraph--red">Results for</p>
        <p className="heading-primary heading-primary--bold">
          &quot;{searchValue}&quot;
        </p>
      </section>
      {/* MOVIES GRID LIST */}
      <MovieListBox
        data={searchMovieList}
        setSelectedMovieId={setSelectedMovieId}
      />
    </>
  );
};

export default ResultsPage;
