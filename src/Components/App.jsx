import { useState, useEffect } from "react";
import Header from "./Header/Header";
import SideBar from "./Sidebar/Sidebar";
import { API_URL_GENRE, KEY } from "../constants";
import HomePage from "./HomePage";
import ResultsPage from "./ResultsPage";
import SelectedMoviePage from "./SelectedMoviePage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [genreList, setGenreList] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState("866398");

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
      <Header
        genreList={genreList}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <div className="content">
        <aside className="sidebar">
          <SideBar genreList={genreList} />
        </aside>

        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  genreList={genreList}
                  setSelectedMovieId={setSelectedMovieId}
                />
              }
            />
            <Route
              path="/genre/:query"
              element={
                <ResultsPage
                  searchValue={searchValue}
                  setSelectedMovieId={setSelectedMovieId}
                />
              }
            />
            <Route
              path="/movie"
              element={
                <SelectedMoviePage
                  selectedMovieId={selectedMovieId}
                  setSelectedMovieId={setSelectedMovieId}
                />
              }
            />
          </Routes>

          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default App;
