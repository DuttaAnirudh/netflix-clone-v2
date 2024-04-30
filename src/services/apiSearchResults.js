import { API_URL_SEARCH, KEY } from "../utils/helpers";

let controller = null;

export const getSearchedMovieList = async (query) => {
  try {
    // Abort previous fetch request if it exists
    if (controller) {
      controller.abort();
    }

    // Create a new AbortController
    controller = new AbortController();

    const { signal } = controller;

    const res = await fetch(`${API_URL_SEARCH}?query=${query}&api_key=${KEY}`, {
      signal,
    });
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

    return movieData;
  } catch (err) {
    if (err.name === "AbortError") {
      return;
    } else {
      console.error(err);
    }
  }
};
