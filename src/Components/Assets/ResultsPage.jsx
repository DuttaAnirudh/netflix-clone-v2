import { useDispatch, useSelector } from "react-redux";
import Error from "./Error";
import MovieListBox from "./MovieListBox";
import { fetchSearchDataForNextPage } from "../../slices/searchDataSlice";
import Pagination from "./Pagination";

const ResultsPage = ({ data, totalPages, searchValue }) => {
  const storeMovieData = useSelector(
    (store) => store.searchMovieData.searchData
  );

  const dispatch = useDispatch();

  const handlePageClick = (data) => {
    const pageNum = data.selected + 1;
    const arg = { query: searchValue, pageNum };
    dispatch(fetchSearchDataForNextPage(arg));
  };

  const movieData = storeMovieData || data;

  if (movieData.length === 0) {
    return <Error message={`No results for "${searchValue}"`} />;
  }

  return (
    <>
      {/* SEARCH QUERY INPUT DETAILS */}
      <section className="section-query-details mb-4">
        <p className="paragrapgh paragraph--red">Results for</p>
        <p className="heading-primary heading-primary--bold">
          &quot;{searchValue}&quot;
        </p>
      </section>
      {/* MOVIES GRID LIST */}
      <MovieListBox data={movieData} />
      (
      <Pagination totalPages={totalPages} handlePageClick={handlePageClick} />)
    </>
  );
};

export default ResultsPage;
