import SearchIcon from "../../assets/search.png";
import { useRef } from "react";

const SearchBox = () => {
  const formRef = useRef(null);

  const handleInputFocusOnClick = () => {
    formRef.current.focus();
  };

  return (
    <div className="search__box">
      <form className="search__wrapper" id="search-form">
        <input
          type="text"
          className="search__field"
          name="search"
          placeholder="Search any movies..."
          id="search-box"
          ref={formRef}
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
