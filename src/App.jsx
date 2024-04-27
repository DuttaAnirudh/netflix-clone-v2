import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import SideBar from "./Components/Sidebar/Sidebar";
import { API_URL_GENRE, KEY } from "./utils/helpers";
import HomePage from "./Pages/HomePage";
import SelectedMoviePage from "./Pages/SelectedMoviePage";
import { Route, Routes } from "react-router-dom";
import SearchResultsPage from "./Pages/SearchResultsPage";
import GenreSearchResults from "./Pages/GenreSearchResults";

function App() {
  const [genreList, setGenreList] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState("");

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
              path="/search/:query"
              element={
                <SearchResultsPage
                  searchValue={searchValue}
                  setSelectedMovieId={setSelectedMovieId}
                />
              }
            />

            <Route
              path="/genre/:genreName"
              element={
                <GenreSearchResults setSelectedMovieId={setSelectedMovieId} />
              }
            />

            <Route
              path="/movie/:id"
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
