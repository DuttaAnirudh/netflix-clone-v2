import Hero from "./Hero/Hero";
import ShowcaseBox from "./Showcase/ShowcaseBox";

const HomePage = ({ genreList }) => {
  return (
    <>
      <Hero genreList={genreList} />
      <ShowcaseBox />
    </>
  );
};

export default HomePage;
