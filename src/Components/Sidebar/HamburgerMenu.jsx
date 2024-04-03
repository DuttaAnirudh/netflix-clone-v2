import { useState } from "react";
import GenreList from "./GenreList";

const HamburgerMenu = ({ genreList }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((show) => !show);
  };

  return (
    <div className="navigation">
      {/* HAMBURGER ICON */}
      <div className="navigation__box">
        <input
          type="checkbox"
          id="navi-toggle"
          className="navigation__checkbox"
        />
        <label
          htmlFor="navi-toggle"
          className="navigation__button"
          onClick={handleHamburgerClick}
        >
          <span className="navigation__icon">&nbsp;</span>
        </label>
      </div>

      {/* HAMBURGER CONTENT */}
      {menuOpen && (
        <nav className="navigation__nav">
          <GenreList sectionName={"menu"} genreList={genreList} />
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
