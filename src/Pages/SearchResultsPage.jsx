// import { useEffect } from "react";
import ResultsPage from "../Components/Assets/ResultsPage";
import { useLoaderData, useParams } from "react-router-dom";
import { getSearchedMovieList } from "../services/apiSearchReaults";

const SearchResultsPage = () => {
  const searchMovieList = useLoaderData();

  const { query } = useParams();

  return <ResultsPage searchValue={query} data={searchMovieList} />;
};

export default SearchResultsPage;

export const loader = async ({ params }) => {
  const searchData = await getSearchedMovieList(params.query);
  return searchData;
};
