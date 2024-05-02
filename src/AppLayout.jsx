import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Header from "./Components/Header/Header";
import SideBar from "./Components/Sidebar/Sidebar";
import { getGenreList } from "./services/apiHomepage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadGenreList } from "./slices/genreSlice";
import Loader from "./Components/Assets/Loader";
import NavList from "./Components/Sidebar/NavList";
import { hideMenu } from "./slices/showMenuSlice";
import closeIcon from "./assets/cross.svg";

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

  const handleCloseMenu = () => {
    dispatch(hideMenu());
  };

  return (
    <div className={`container ${showMenuStatus ? "disable-scroll" : ""}`}>
      <Header />

      <div className="content">
        <aside className="sidebar">
          <SideBar />
        </aside>

        <div className="main">{isLoading ? <Loader /> : <Outlet />}</div>
      </div>

      {showMenuStatus && (
        <nav className="categories">
          <div className="categories__container">
            <NavList
              sectionName={"menu"}
              data={genreList}
              onClickEvent={handleCloseMenu}
            />
            <div className="gradient"></div>
            <div className="categories__close" onClick={handleCloseMenu}>
              <img src={closeIcon} className="categories__close-icon" />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export const loader = async () => {
  const genreList = await getGenreList();
  return genreList;
};

export default AppLayout;
