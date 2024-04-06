import SearchIcon from "../../assets/search.png";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = ({ searchValue, setSearchValue }) => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleInputFocusOnClick = () => {
    formRef.current.focus();
  };

  const handleResultsOnInputFormChange = (value) => {
    setSearchValue(value);
    navigate(`/search/${value}`);
  };

  return (
    <div className="search__box">
      <form className="search__wrapper" id="search-form">
        <input
          type="text"
          className="search__field"
          name="search"
          value={searchValue}
          placeholder="Search any movies..."
          id="search-box"
          ref={formRef}
          onChange={(e) => handleResultsOnInputFormChange(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="search"
          className="search__icon"
          onClick={handleInputFocusOnClick}
        />
      </form>
    </div>
  );
};

export default SearchBox;
