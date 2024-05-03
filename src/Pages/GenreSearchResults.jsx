import { useLoaderData, useParams } from "react-router-dom";
import ResultsPage from "../Components/Assets/ResultsPage";
import { getGenreRelatedMovieList } from "../services/apiGenreSearch";
import { useEffect } from "react";
import { updateSearchData } from "../slices/searchDataSlice";
import { useDispatch } from "react-redux";
import MenuTab from "../Components/Hero/MenuTab";

const GenreSearchResults = () => {
  const { movieData, totalPages } = useLoaderData();

  const { genreName } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearchData(movieData));
  }, [movieData, dispatch]);

  return (
    <>
      <MenuTab title="Categories" subTitle={genreName} />
      <ResultsPage
        data={movieData}
        totalPages={totalPages}
        searchValue={genreName}
      />
    </>
  );
};

export default GenreSearchResults;

export const loader = async ({ params }) => {
  const searchData = await getGenreRelatedMovieList(params.genreName);
  return searchData;
};
