import SearchIcon from "../../assets/search.png";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SearchBox = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const { query } = useParams();

  const handleInputFocusOnClick = () => {
    formRef.current.focus();
  };

  const handleNavigationOnSearch = (value) => {
    if (value.length < 1) return;
    navigate(`/search/${value}`);
  };

  return (
    <div className="search__box">
      <form className="search__wrapper" id="search-form">
        <input
          type="text"
          className="search__field"
          name="search"
          defaultValue={query}
          placeholder="Search any movies..."
          id="search-box"
          ref={formRef}
          onChange={(e) => handleNavigationOnSearch(e.target.value)}
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
