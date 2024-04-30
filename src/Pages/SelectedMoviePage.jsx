import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";

import MovieDetailTextbox from "../Components/Assets/MovieDetailTextbox";
import Credits from "../Components/MovieDetails/Credits";
import VideoRow from "../Components/MovieDetails/VideoRow";
import SimilarMoviesList from "../Components/MovieDetails/SimilarMoviesList";
import Button from "../Components/Assets/Button";

import { API_URL_BASE_IMAGE } from "../utils/helpers";
import {
  getMovieCast,
  getMovieDetails,
  getMovieVideos,
  getSimilarMovies,
} from "../services/apiSelectedMovie";
import {
  fetchMoreSimilarMovies,
  updateSimilarMovieList,
} from "../slices/similarMovieSlice";

const SelectedMoviePage = () => {
  const [showButton, setShowButton] = useState(true);

  const { topLevelDetails, credits, videoKeys, similarMoviesData } =
    useLoaderData();

  const dispatch = useDispatch();
  // Pushing Similar movies data to store
  dispatch(updateSimilarMovieList(similarMoviesData));

  const { movieId } = useParams();
  const arg = { id: movieId, pageNum: 2 };

  const handleLoadMoreMovies = () => {
    setShowButton(false);
    dispatch(fetchMoreSimilarMovies(arg));
  };

  return (
    <>
      <section className="section-movie-details mb-4">
        <figure className="movie__poster">
          <img
            src={`${API_URL_BASE_IMAGE}${topLevelDetails.posterImg}`}
            alt={`${topLevelDetails.title} poster`}
            className="movie__img"
          />
        </figure>

        <div className="movie__content">
          {/* TOP LEVEL DETAILS */}
          <MovieDetailTextbox
            type="secondary"
            movieName={topLevelDetails.title}
            year={topLevelDetails.year}
            rating={topLevelDetails.rating}
            genre={topLevelDetails.genre}
            description={topLevelDetails.overview}
            duration={topLevelDetails.runtime}
          />

          {/* MOVIE CAST */}
          <Credits data={credits} />

          {/* MOVIE TRAILER, TEASER & CLIPS*/}
          <VideoRow data={videoKeys} />
        </div>
      </section>

      {/*  SIMILAR MOVIES LIST */}
      <SimilarMoviesList data={similarMoviesData} />

      <div className="mt-4">
        {showButton && (
          <Button
            classNameBtn={"btn--center"}
            onClickEvent={handleLoadMoreMovies}
          >
            Load More
          </Button>
        )}
      </div>
    </>
  );
};

export const loader = async ({ params }) => {
  const topLevelDetails = await getMovieDetails(params.movieId);
  const credits = await getMovieCast(params.movieId);
  const videoKeys = await getMovieVideos(params.movieId);
  const similarMoviesData = await getSimilarMovies(params.movieId, 1);

  return { topLevelDetails, credits, videoKeys, similarMoviesData };
};

export default SelectedMoviePage;
