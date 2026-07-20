import "./css/SearchBar.css";

const SearchBar = ({
  searchCity,
  setSearchCity,
  searchState,
  setSearchState,
  onSubmit
}) => {
  return (
    <form className="search-container" onSubmit={onSubmit}>

      <div className="input-group">

        <input
          type="text"
          placeholder="Enter a City"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter a State (United States)"
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)}
        />

      </div>


      <button type="submit">
        Search
      </button>

    </form>
  );
};

export default SearchBar;