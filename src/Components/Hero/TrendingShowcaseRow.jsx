import { useEffect, useState } from "react";
import ShowcaseRow from "../Assets/ShowcaseRow";
import { API_URL_TRENDING, KEY } from "../../utils/helpers";

const TrendingShowcaseRow = ({ title, setSelectedMovieId }) => {
  const [trendingList, setTrendingList] = useState(null);

  const timeFrame = "week";

  useEffect(() => {
    const fetchTrendingMoviesList = async () => {
      try {
        const res = await fetch(
          `${API_URL_TRENDING}/${timeFrame}?api_key=${KEY}`
        );

        const data = await res.json();

        const trendingData = data.results.map((movie) => {
          return {
            id: movie.id,
            title: movie.title,
            year: movie.release_date,
            rating: movie.vote_average,
            posterImg: movie.poster_path,
          };
        });

        setTrendingList(trendingData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTrendingMoviesList();
  }, []);

  return (
    <ShowcaseRow
      title={title}
      data={trendingList}
      setSelectedMovieId={setSelectedMovieId}
    />
  );
};

export default TrendingShowcaseRow;
