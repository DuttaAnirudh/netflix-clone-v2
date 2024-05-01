import { API_URL_SEARCH, KEY } from "../utils/helpers";

let controller = null;

export const getSearchedMovieList = async (query, pageNum = 1) => {
  try {
    // Abort previous fetch request if it exists
    if (controller) {
      controller.abort();
    }

    // Create a new AbortController
    controller = new AbortController();

    const { signal } = controller;

    const res = await fetch(
      `${API_URL_SEARCH}?query=${query}&api_key=${KEY}&page=${pageNum}`,
      {
        signal,
      }
    );
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
    if (err.name === "AbortError") {
      return;
    } else {
      console.error(err);
    }
  }
};
