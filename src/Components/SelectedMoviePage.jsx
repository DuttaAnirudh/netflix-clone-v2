import { useEffect, useState } from "react";
import { API_URL, API_URL_BASE_IMAGE, KEY } from "../constants";
import MovieDetailTextbox from "./MovieDetailTextbox";
import Credits from "./Credits";
import VideoRow from "./VideoRow";
import SimilarMoviesList from "./SimilarMoviesList";

const SelectedMoviePage = ({ selectedMovieId, setSelectedMovieId }) => {
  const [topLevelDetails, setTopLevelDetails] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(`${API_URL}/${selectedMovieId}?api_key=${KEY}`);
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
        setTopLevelDetails(dataTopLevel);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovieDetails();
  }, [selectedMovieId]);

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
            sectionClassName={"movie"}
            movieName={topLevelDetails.title}
            year={topLevelDetails.year}
            rating={topLevelDetails.rating}
            genre={topLevelDetails.genre}
            description={topLevelDetails.overview}
            duration={topLevelDetails.runtime}
          />

          {/* MOVIE CAST */}
          <Credits selectedMovieId={selectedMovieId} />

          {/* MOVIE TRAILER, TEASER & CLIPS*/}
          <VideoRow selectedMovieId={selectedMovieId} />
        </div>
      </section>

      {/*  SIMILAR MOVIES LIST */}
      <SimilarMoviesList
        selectedMovieId={selectedMovieId}
        setSelectedMovieId={setSelectedMovieId}
      />
    </>
  );
};

export default SelectedMoviePage;
