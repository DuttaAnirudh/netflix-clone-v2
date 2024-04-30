import MovieListBox from "../Assets/MovieListBox";
import { useSelector } from "react-redux";

const SimilarMoviesList = ({ data }) => {
  const similarMovieList = useSelector(
    (store) => store.similarMovie.similarMovieList
  );

  return (
    <>
      <MovieListBox data={similarMovieList || data} />
    </>
  );
};

export default SimilarMoviesList;
