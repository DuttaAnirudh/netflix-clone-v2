import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Components/Header/Header";
import SideBar from "./Components/Sidebar/Sidebar";
import { getGenreList } from "./services/apiRequests";

const AppLayout = () => {
  const genreList = useLoaderData();

  return (
    <div className="container">
      <Header
        genreList={genreList}
        // searchValue={searchValue}
        // setSearchValue={setSearchValue}
      />

      <div className="content">
        <aside className="sidebar">
          <SideBar genreList={genreList} />
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
