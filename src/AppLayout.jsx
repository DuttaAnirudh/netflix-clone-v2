import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Components/Header/Header";
import SideBar from "./Components/Sidebar/Sidebar";
import { getGenreList } from "./services/apiRequests";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadGenreList } from "./slices/genreSlice";

const AppLayout = () => {
  const genreList = useLoaderData();

  const dispatch = useDispatch();

  // Storing genreList in the store
  useEffect(() => {
    dispatch(loadGenreList(genreList));
  }, [dispatch, genreList]);

  return (
    <div className="container">
      <Header
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      />

      <div className="content">
        <aside className="sidebar">
          <SideBar />
        </aside>

        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export const loader = async () => {
  const genreList = await getGenreList();
  return genreList;
};

export default AppLayout;
