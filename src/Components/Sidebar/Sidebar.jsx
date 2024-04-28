import { useSelector } from "react-redux";
import NavList from "./NavList";
import { getGenre } from "../../slices/genreSlice";

const Sidebar = () => {
  const genreList = useSelector(getGenre);

  return (
    <div className="sidebar__box">
      <NavList title="Genre" sectionName={"sidebar"} data={genreList} />
    </div>
  );
};

export default Sidebar;
