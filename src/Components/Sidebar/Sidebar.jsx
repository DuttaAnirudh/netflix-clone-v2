import { useSelector } from "react-redux";
import NavList from "./NavList";
import { getGenre } from "../../slices/genreSlice";
import clock from "../../assets/clock-check.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const genreList = useSelector(getGenre);

  return (
    <div className="sidebar__box">
      <NavList title="Genre" sectionName={"sidebar"} data={genreList} />
      <Link to="/mylist" className="sidebar__options mt-4">
        <h3 className="heading-tertiary sidebar__option-text">Watch Later</h3>
        <img
          src={clock}
          alt="watch later icon"
          className="sidebar__option-img"
        />
      </Link>
    </div>
  );
};

export default Sidebar;
