import { useEffect, useState } from "react";
import NavList from "./NavList";
import { API_URL_GENRE, KEY } from "../../constants";

const GenreList = ({ sectionName }) => {
  const [genreList, setGenreList] = useState(null);

  useEffect(() => {
    const fetchGenreList = async () => {
      try {
        const res = await fetch(`${API_URL_GENRE}/list?api_key=${KEY}`);

        const data = await res.json();

        console.log(data.genres);

        setGenreList(data.genres);
      } catch (err) {
        console.error(err);
      }
    };
    fetchGenreList();
  }, []);

  return <NavList title="Genre" sectionName={sectionName} data={genreList} />;
};

export default GenreList;
