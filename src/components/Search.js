import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ searchResult }) => {
  const [search, setSearch] = useState();
  return (
    <div className="positionheader">
      <Link to="/">{/* <img className="logo" alt="logo" src={logo} /> */}</Link>
      <form className="header">
        <input
          className="search"
          type="search"
          value={search}
          placeholder="Find your favorite movie"
          onChange={(event) => searchResult(event)}
        ></input>
      </form>
    </div>
  );
};

export default Search;
