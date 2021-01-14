import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MoviesDetails from "../components/MoviesDetails";

const MoviesDescription = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Requête à l'API pour pouvoir afficher les détails d'un film sélectionné
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>CHARGEMENT DE LA PAGE ...</p>
  ) : (
    <div>
      <div>
        <MoviesDetails
          picture={data.poster_path}
          title={data.title}
          note={data.vote_average}
          description={data.overview}
        />
      </div>
    </div>
  );
};

export default MoviesDescription;
