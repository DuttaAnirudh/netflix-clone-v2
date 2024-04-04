import MovieDetailTextbox from "./MovieDetailTextbox";
import MovieListBox from "./MovieListBox";
import VideoRow from "./VideoRow";

const SelectedMoviePage = () => {
  return (
    <>
      <section className="section-movie-details mb-4">
        <figure className="movie__poster">
          <img
            src="/src/assets/slider-control.jpg"
            alt="movie poster"
            className="movie__img"
          />
        </figure>

        <div className="movie__content">
          <MovieDetailTextbox
            sectionClassName={"movie"}
            movieName={"Puss in Boots: The Last Wish"}
            year={"2022-12-1"}
            rating={8.823}
            genre={["Adventure", "animation", "comedy"]}
            description={` Puss in Boots discovers that his passion for adventure has
  taken its toll: He has burned through eight of his nine lives,
  leaving him with only one life left. Puss sets out on an epic
  journey to find the mythical Last Wish and restore his nine
  lives.`}
            duration={162}
            director={`Ryan Coogler`}
            cast={`Letitia Wright, Lupita Nyong'o, Danai Gurira, Winston Duke,
  Dominique Thorne, Tenoch Huerta Mejía, Angela Bassett,
  Florence Kasumba, Michaela Coel, Mabel Cadena`}
          />

          {/* TRAILERS  */}
          <VideoRow />
        </div>
      </section>

      {/*  MOVIES GRID LIST */}
      <MovieListBox />
    </>
  );
};

export default SelectedMoviePage;
