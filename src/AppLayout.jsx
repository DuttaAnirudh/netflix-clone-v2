import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Header from "./Components/Header/Header";
import SideBar from "./Components/Sidebar/Sidebar";
import { getGenreList } from "./services/apiHomepage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadGenreList } from "./slices/genreSlice";
import Loader from "./Components/Assets/Loader";
import CategoriesMenu from "./Components/Assets/CategoriesMenu";

const AppLayout = () => {
  const genreList = useLoaderData();

  const showMenuStatus = useSelector((store) => store.showMenu.showMenu);

  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  const dispatch = useDispatch();

  // Storing genreList in the store
  useEffect(() => {
    dispatch(loadGenreList(genreList));
  }, [dispatch, genreList]);

  return (
    <div className={`container ${showMenuStatus ? "disable-scroll" : ""}`}>
      <Header />

      <div className="content">
        <aside className="sidebar">
          <SideBar />
        </aside>

        <div className="main">{isLoading ? <Loader /> : <Outlet />}</div>
      </div>

      {/* CATEGORIES MENU */}
      {showMenuStatus && <CategoriesMenu />}
    </div>
  );
};

export const loader = async () => {
  const genreList = await getGenreList();
  return genreList;
};

export default AppLayout;
