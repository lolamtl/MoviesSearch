import React from "react";

// Barre de recherche.

const Search = ({ result, setResult }) => {
  return (
    <div className="searcharea">
      <input
        className="searchbar"
        type="search"
        placeholder="Find your movie  🎞 "
        value={result}
        onChange={(event) => setResult(event.target.value)}
      />
    </div>
  );
};

export default Search;
