import HamburgerMenu from "./Sidebar/HamburgerMenu";
import SearchBox from "./SearchBox";
import NetflixLogo from "../assets/logo.svg";

const Header = ({ genreList }) => {
  return (
    <header className="header mb-4">
      <div className="header__navigation">
        {/* HAMBURGER MENU FOR SMALL SCREENS */}
        <HamburgerMenu genreList={genreList} />

        <a href="#">
          <img src={NetflixLogo} alt="Netflix Logo" className="logo" />
        </a>
      </div>

      {/* SEARCH BOX */}
      <SearchBox />
    </header>
  );
};

export default Header;
