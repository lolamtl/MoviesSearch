import React from "react";

const MoviesList = ({ movie }) => {
  return (
    <div className="list">
      <p className="title">{movie.original_title}</p>

      <img
        className="picture"
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt="poster"
      />
    </div>
  );
};

export default MoviesList;
