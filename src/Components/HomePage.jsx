import Hero from "./Hero/Hero";
import ShowcaseBox from "./Showcase/ShowcaseBox";

const HomePage = ({ genreList, setSelectedMovieId }) => {
  return (
    <>
      <Hero genreList={genreList} />
      <ShowcaseBox setSelectedMovieId={setSelectedMovieId} />
    </>
  );
};

export default HomePage;
