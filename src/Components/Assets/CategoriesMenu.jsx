import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { hideMenu } from "../../slices/showMenuSlice";
import closeIcon from "../../assets/cross.svg";
import NavList from "../Sidebar/NavList";
import { getGenre } from "../../slices/genreSlice";

const CategoriesMenu = () => {
  const genreList = useSelector(getGenre);

  const location = useLocation();

  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    dispatch(hideMenu());
  };

  return (
    <nav className="categories">
      <div className="categories__container">
        <Link
          to="/"
          className={`menu__link mb-2 ${
            location.pathname === "/" ? "highlight" : ""
          }`}
          onClick={handleCloseMenu}
        >
          Home
        </Link>
        <Link
          to="/myList"
          className={`menu__link mb-2 ${
            location.pathname === "/myList" ? "highlight" : ""
          }`}
          onClick={handleCloseMenu}
        >
          My List
        </Link>
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
  );
};

export default CategoriesMenu;
