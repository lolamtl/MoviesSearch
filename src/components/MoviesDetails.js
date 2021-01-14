import React from "react";

// Détails d'un film.

const MoviesDetails = ({ title, picture, note, description }) => {
  return (
    <div className="moviedetails">
      <div>
        <img
          className="picture"
          src={`https://image.tmdb.org/t/p/w200/${picture}`}
          alt="poster"
        />
      </div>
      <div className="carddetails">
        <h1 className="detailstitle">{title}</h1>
        <p className="note">{note}/10</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default MoviesDetails;
