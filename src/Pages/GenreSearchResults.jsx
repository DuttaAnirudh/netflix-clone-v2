import { useLoaderData, useParams } from "react-router-dom";
import ResultsPage from "../Components/Assets/ResultsPage";
import { getGenreRelatedMovieList } from "../services/apiGenreSearch";

const GenreSearchResults = () => {
  const genreMovieList = useLoaderData();
  let { genreName } = useParams();

  return <ResultsPage searchValue={genreName} data={genreMovieList} />;
};

export default GenreSearchResults;

export const loader = async ({ params }) => {
  const genreMovieList = await getGenreRelatedMovieList(params.genreName);
  return genreMovieList;
};
