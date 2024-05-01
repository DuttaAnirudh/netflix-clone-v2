import { API_URL_SEARCH, KEY } from "../utils/helpers";

export const getGenreRelatedMovieList = async (value) => {
  try {
    const res = await fetch(`${API_URL_SEARCH}?query=${value}&api_key=${KEY}`);
    const data = await res.json();

    const totalPages = data.total_pages;

    const movieData = data.results.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        year: movie.release_date,
        rating: movie.vote_average,
        posterImg: movie.poster_path,
      };
    });

    return { movieData, totalPages };
  } catch (err) {
    console.error(err);
  }
};
