import {
  API_URL,
  API_URL_GENRE,
  API_URL_TRENDING,
  KEY,
} from "../utils/helpers";

export const getGenreList = async () => {
  try {
    const res = await fetch(`${API_URL_GENRE}/list?api_key=${KEY}`);

    const data = await res.json();

    return data.genres;
  } catch (err) {
    console.error(err);
  }
};

export const getTrendingMoviesList = async () => {
  try {
    const res = await fetch(`${API_URL_TRENDING}/week?api_key=${KEY}`);

    const data = await res.json();

    const trendingData = data.results.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        year: movie.release_date,
        rating: movie.vote_average,
        posterImg: movie.poster_path,
      };
    });

    return trendingData;
  } catch (err) {
    console.error(err);
  }
};

export const getTopRatedMovies = async () => {
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

    return moviesData;
  } catch (err) {
    console.error(err);
  }
};

export const getPopularMovies = async () => {
  try {
    const res = await fetch(
      `${API_URL}/popular?language=en-US&page=1&api_key=${KEY}`
    );

    const data = await res.json();

    const popularMovieList = data.results.map((movie) => {
      return {
        id: movie.id,
        genreID: movie.genre_ids,
        title: movie.title,
        overview: movie.overview,
        year: movie.release_date,
        rating: movie.vote_average,
        posterImg: movie.poster_path,
        backdropImg: movie.backdrop_path,
      };
    });

    return popularMovieList;
  } catch (err) {
    console.error(err);
  }
};

export const getUpcomingMovies = async () => {
  try {
    const res = await fetch(`${API_URL}/upcoming?api_key=${KEY}`);

    const data = await res.json();

    const upcomingMoviesList = data.results.map((movie) => {
      return {
        id: movie.id,
        genreID: movie.genre_ids,
        title: movie.title,
        overview: movie.overview,
        year: movie.release_date,
        rating: movie.vote_average,
        posterImg: movie.poster_path,
        backdropImg: movie.backdrop_path,
      };
    });

    return upcomingMoviesList;
  } catch (err) {
    console.error(err);
  }
};
