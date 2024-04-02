import { useEffect, useState } from "react";
import NavList from "./NavList";
import { API_URL_GENRE, KEY } from "../constants";

const Sidebar = () => {
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

  return (
    <div className="sidebar__box">
      <NavList title="Genre" sectionName="sidebar" data={genreList} />
    </div>
  );
};

export default Sidebar;
