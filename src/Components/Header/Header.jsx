import SearchBox from "./SearchBox";
import NetflixLogo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <header className="header mb-4">
      <div className="header__navigation">
        <Link to="/">
          <img src={NetflixLogo} alt="Netflix Logo" className="logo" />
        </Link>
      </div>

      {/* SEARCH BOX */}
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </header>
  );
};

export default Header;
