import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import ResultsPage from "../Components/Assets/ResultsPage";
import { getSearchedMovieList } from "../services/apiSearchResults";
import { updateSearchData } from "../slices/searchDataSlice";
import MenuTab from "../Components/Assets/MenuTab";

const SearchResultsPage = () => {
  const { movieData, totalPages } = useLoaderData();

  const { query } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearchData(movieData));
  }, [movieData, dispatch]);

  return (
    <>
      <MenuTab title="Categories" />
      <ResultsPage
        data={movieData}
        totalPages={totalPages}
        searchValue={query}
      />
    </>
  );
};

export default SearchResultsPage;

export const loader = async ({ params }) => {
  const searchData = await getSearchedMovieList(params.query);
  return searchData;
};
