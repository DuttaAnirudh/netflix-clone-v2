import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL_SEARCH, KEY } from "../../constants";
import ResultsPage from "../Assets/ResultsPage";

const GenreSearchResults = ({ setSelectedMovieId }) => {
  const [genreMovieList, setGenreMovieList] = useState([]);
  let { genreName } = useParams();

  useEffect(() => {
    const fetchSearchedMovieList = async () => {
      try {
        const res = await fetch(
          `${API_URL_SEARCH}?query=${genreName}&api_key=${KEY}`
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

        setGenreMovieList(movieData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSearchedMovieList();
  }, [genreName]);

  return (
    <ResultsPage
      searchValue={genreName}
      setSelectedMovieId={setSelectedMovieId}
      data={genreMovieList}
    />
  );
};

export default GenreSearchResults;
