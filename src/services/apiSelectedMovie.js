import { API_URL, KEY } from "../utils/helpers";

export const getMovieDetails = async (movieID) => {
  try {
    const res = await fetch(`${API_URL}/${movieID}?api_key=${KEY}`);
    const data = await res.json();

    const dataTopLevel = {
      id: data.id,
      adult: data.adult,
      genre: data.genres.map((gen) => gen.name),
      title: data.title,
      overview: data.overview,
      runtime: data.runtime,
      year: data.release_date,
      rating: data.vote_average,
      posterImg: data.poster_path,
    };
    return dataTopLevel;
  } catch (err) {
    console.error(err);
  }
};

export const getMovieCast = async (movieID) => {
  try {
    const res = await fetch(`${API_URL}/${movieID}/credits?api_key=${KEY}`);
    const data = await res.json();

    // Filtering only the first 10 actors
    const dataActors = data.cast
      .filter((el) => el.known_for_department === "Acting")
      .slice(0, 10)
      .map((el) => el.name);

    // Filtering only the first director
    const dataDirector = data.crew.filter(
      (el) => el.known_for_department === "Directing"
    )[0];

    return { dataActors, dataDirector };
  } catch (err) {
    console.error(err);
  }
};

export const getMovieVideos = async (movieID) => {
  try {
    const res = await fetch(`${API_URL}/${movieID}/videos?api_key=${KEY}`);
    const data = await res.json();

    const movieVideos = data.results
      .filter(
        (vidInfo) =>
          vidInfo.type === "Teaser" ||
          vidInfo.type === "Trailer" ||
          vidInfo.type === "Clip"
      )
      .map((vidInfo) => vidInfo.key);

    return movieVideos;
  } catch (err) {
    console.error(err);
  }
};

export const getSimilarMovies = async (movieID) => {
  try {
    const res = await fetch(`${API_URL}/${movieID}/similar?api_key=${KEY}`);
    const data = await res.json();

    const similarMovieList = data.results.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        year: movie.release_date,
        rating: movie.vote_average,
        posterImg: movie.poster_path,
      };
    });

    return similarMovieList;
  } catch (err) {
    console.error(err);
  }
};
