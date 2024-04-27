import ShowcaseRow from "../Assets/ShowcaseRow";

const TrendingShowcaseRow = ({ title, setSelectedMovieId, trendingMovies }) => {
  return (
    <ShowcaseRow
      title={title}
      data={trendingMovies}
      setSelectedMovieId={setSelectedMovieId}
    />
  );
};

export default TrendingShowcaseRow;
