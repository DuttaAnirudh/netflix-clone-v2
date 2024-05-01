import SearchIcon from "../../assets/search.png";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const SearchBox = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { query } = useParams();

  const handleInputFocusOnClick = () => {
    formRef.current.focus();
  };

  const handleNavigationOnSearch = (value) => {
    if (value.length < 1) return;
    navigate(`/search/${value}`);
  };

  useEffect(() => {
    if (location.pathname === `/search/${query}`) {
      window.onpopstate = () => {
        navigate("/");
      };
    } else {
      window.onpopstate = null;
    }

    // Clean up the effect
    return () => {
      window.onpopstate = null;
    };
  }, [location.pathname, navigate, query]);

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
