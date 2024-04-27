import { useEffect, useState } from "react";
import { API_URL_SEARCH, KEY } from "../utils/helpers";
import ResultsPage from "../Components/Assets/ResultsPage";

const SearchResultsPage = ({ searchValue, setSelectedMovieId }) => {
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
    <ResultsPage
      searchValue={searchValue}
      setSelectedMovieId={setSelectedMovieId}
      data={searchMovieList}
    />
  );
};

export default SearchResultsPage;
