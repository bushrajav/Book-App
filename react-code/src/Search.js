import React from "react";
import { useEffect, useState } from "react";
import "./Header.css";

function Search({ results, setFilteredResults }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    const filteredResults = results.filter((result) =>
      result.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredResults(filteredResults);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="search__button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
}

export default Search;
