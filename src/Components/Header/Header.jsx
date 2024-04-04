import HamburgerMenu from "./HamburgerMenu";
import SearchBox from "./SearchBox";
import NetflixLogo from "../../assets/logo.svg";

const Header = ({ genreList, searchValue, setSearchValue }) => {
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
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </header>
  );
};

export default Header;