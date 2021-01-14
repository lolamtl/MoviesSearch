import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import MoviesList from "../components/MoviesList";

const Home = () => {
  const [result, setResult] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Requête à l'API pour afficher la liste de film.

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
    const fetchData = async () => {
      try {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
        const response = await axios.get(
          url +
            "&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1"
        );

        setData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  let newResults = [];
  // Exécuté à chaque changement dans l'input search.
  for (let i = 0; i < data.length; i++) {
    if (data[i].title.indexOf(result) !== -1) {
      newResults.push(
        <MoviesList key={i} title={data[i].title} id={data[i].id} />
      );
    }
  }

  return isLoading ? (
    <p>CHARGEMENT DE LA PAGE...</p>
  ) : (
    <div className="contain">
      <Search
        data={data}
        setData={setData}
        result={result}
        setResult={setResult}
      />
      <div className="home">{newResults}</div>
    </div>
  );
};

export default Home;
