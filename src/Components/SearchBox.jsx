const SearchBox = () => {
  return (
    <div className="search__box">
      <form className="search__wrapper" id="search-form">
        <input
          type="text"
          className="search__field"
          name="search"
          placeholder="Search any movies..."
          id="search-box"
        />

        <img
          src="/src/assets/search.png"
          alt="search"
          className="search__icon"
        />
      </form>
    </div>
  );
};

export default SearchBox;
