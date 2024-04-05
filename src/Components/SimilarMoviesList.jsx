import { useEffect, useState } from "react";
import { API_URL, KEY } from "../constants";
import MovieListBox from "./MovieListBox";

const SimilarMoviesList = ({ selectedMovieId, setSelectedMovieId }) => {
  const [similarMoviesData, setSimilarMoviesData] = useState([]);

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      try {
        const res = await fetch(
          `${API_URL}/${selectedMovieId}/similar?api_key=${KEY}`
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

        setSimilarMoviesData(movieData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSimilarMovies();
  }, [selectedMovieId]);

  return (
    <>
      <MovieListBox
        data={similarMoviesData}
        setSelectedMovieId={setSelectedMovieId}
      />
    </>
  );
};

export default SimilarMoviesList;
