import React from "react";
import { Link } from "react-router-dom";

// Liste de films.
const MoviesList = ({ title, id }) => {
  return (
    <Link className="list" to={`/movie/${id}`}>
      <p className="title"> 🎬 {title} 🎬</p>
    </Link>
  );
};

export default MoviesList;
