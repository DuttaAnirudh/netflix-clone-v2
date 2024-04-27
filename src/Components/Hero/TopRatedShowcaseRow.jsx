import ShowcaseRow from "../Assets/ShowcaseRow";

const TopRatedShowcaseRow = ({ setSelectedMovieId, topRatedMovies }) => {
  return (
    <ShowcaseRow
      title={"Top Rated Movies"}
      data={topRatedMovies}
      setSelectedMovieId={setSelectedMovieId}
    />
  );
};

export default TopRatedShowcaseRow;
