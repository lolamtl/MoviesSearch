import React from "react";
import movies from "../assets/movies.json";

const MoviesDetails = () => {
  return <div>{movies.results.vote_average}</div>;
};

export default MoviesDetails;
