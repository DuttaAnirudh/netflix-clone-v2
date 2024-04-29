import HeroSlider from "./HeroSlider";
import MovieDetailTextbox from "../Assets/MovieDetailTextbox";
import { useState } from "react";
import { API_URL_BASE_IMAGE } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getGenre } from "../../slices/genreSlice";

const Hero = ({ popularMovies }) => {
  const genreList = useSelector(getGenre);

  const [bannerMovie, setBannerMovie] = useState(popularMovies.at(0));
  const [bannerBg, setBannerBg] = useState(popularMovies.at(0).backdropImg);

  const navigate = useNavigate();

  const genreMap = genreList?.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});

  popularMovies.map((movie) => {
    movie.genreNames = movie.genreID.map((id) => {
      return genreMap[id];
    });
  });

  const handleBannerMovie = (id) => {
    const selectedMovie = popularMovies.find((movie) => movie.id === id);
    setBannerMovie(selectedMovie);
    setBannerBg(selectedMovie.backdropImg);
  };

  const handleWatchButtonRouting = () => {
    navigate(`/movie/${bannerMovie.id}`);
  };

  return (
    <section
      className="section-hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgb(7, 8, 9) 0%, rgba(15, 17, 21, 0.118) 100%), url(${API_URL_BASE_IMAGE}${bannerBg})`,
      }}
    >
      {/*  BANNER TEXT  */}
      <MovieDetailTextbox
        movieName={bannerMovie.title}
        year={bannerMovie.year}
        rating={bannerMovie.rating}
        genre={bannerMovie.genreNames}
        description={bannerMovie.overview}
        buttonClickEvent={handleWatchButtonRouting}
      />

      {/* BANNER SLIDER  */}
      <HeroSlider
        data={popularMovies}
        bannerMovieName={bannerMovie.title}
        handleBannerMovie={handleBannerMovie}
      />
    </section>
  );
};

export default Hero;
