import HamburgerMenu from "./HamburgerMenu";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header className="header mb-4">
      <div className="header__navigation">
        {/* HAMBURGER MENU FOR SMALL SCREENS */}
        <HamburgerMenu />

        <a href="#">
          <img src="/src/assets/logo.svg" alt="Netflix Logo" className="logo" />
        </a>
      </div>

      {/* SEARCH BOX */}
      <SearchBox />
    </header>
  );
};

export default Header;
