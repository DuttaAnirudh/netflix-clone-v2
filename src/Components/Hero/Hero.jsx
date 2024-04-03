import HeroSlider from "./HeroSlider";
import MovieDetailTextbox from "../MovieDetailTextbox";
import { useEffect, useState } from "react";
import { API_URL, API_URL_BASE_IMAGE, KEY } from "../../constants";

const Hero = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [bannerMovie, setBannerMovie] = useState([]);
  const [bannerBg, setBannerBg] = useState("");

  const handleBannerMovie = (id) => {
    const selectedMovie = popularMovies.find((movie) => movie.id === id);
    console.log(selectedMovie);
    setBannerMovie(selectedMovie);
    setBannerBg(selectedMovie.backdropImg);
  };

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const res = await fetch(
          `${API_URL}/popular?language=en-US&page=1&api_key=${KEY}`
        );

        const data = await res.json();
        console.log(data.results);

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

        setPopularMovies(popularMovieList);
        setBannerMovie(popularMovieList.at(0));
        setBannerBg(popularMovieList.at(0).backdropImg);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPopularMovies();
  }, []);

  return (
    <section
      className="section-hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgb(7, 8, 9) 0%, rgba(15, 17, 21, 0.118) 100%), url(${API_URL_BASE_IMAGE}${bannerBg})`,
      }}
    >
      {/*  BANNER TEXT  */}
      <MovieDetailTextbox
        button={true}
        movieName={bannerMovie.title}
        year={bannerMovie.year}
        rating={bannerMovie.rating}
        genre={bannerMovie.genreID}
        description={bannerMovie.overview}
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
