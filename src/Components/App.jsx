import { useState, useEffect } from "react";
import Header from "./Header/Header";
import SideBar from "./Sidebar/Sidebar";
import { API_URL_GENRE, KEY } from "../constants";
import HomePage from "./HomePage";

function App() {
  const [genreList, setGenreList] = useState(null);

  useEffect(() => {
    const fetchGenreList = async () => {
      try {
        const res = await fetch(`${API_URL_GENRE}/list?api_key=${KEY}`);

        const data = await res.json();

        setGenreList(data.genres);
      } catch (err) {
        console.error(err);
      }
    };
    fetchGenreList();
  }, []);

  return (
    <div className="container">
      <Header genreList={genreList} />

      <div className="content">
        <aside className="sidebar">
          <SideBar genreList={genreList} />
        </aside>

        <div className="main">
          <HomePage genreList={genreList} />
        </div>
      </div>
    </div>
  );
}

export default App;
