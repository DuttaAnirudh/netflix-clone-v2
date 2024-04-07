import { useRef, useState } from "react";
import NavList from "../Sidebar/NavList";
import { enablePageScroll, disablePageScroll } from "scroll-lock";

const HamburgerMenu = ({ genreList }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const checkBoxRef = useRef("");

  const handleHamburgerClick = () => {
    setMenuOpen((show) => !show);
    menuOpen ? enablePageScroll() : disablePageScroll();
  };

  const handleHamburgerMenuCloseOnClick = () => {
    setMenuOpen(false);
    checkBoxRef.current.checked = false;
  };

  return (
    <div className="navigation">
      {/* HAMBURGER ICON */}
      <div className="navigation__box">
        <input
          type="checkbox"
          id="navi-toggle"
          className="navigation__checkbox"
          ref={checkBoxRef}
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
          <NavList
            title="Genre"
            sectionName={"menu"}
            data={genreList}
            onClickEvent={handleHamburgerMenuCloseOnClick}
          />
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
