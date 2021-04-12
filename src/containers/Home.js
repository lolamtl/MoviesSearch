import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import { Link } from "react-router-dom";

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
      {data.map(({ title, id }, i) =>
        data[i].title.indexOf(result) !== -1 ? (
          <Link to={`/movie/${id}`} className="home">
            {title}
          </Link>
        ) : null
      )}
    </div>
  );
};

export default Home;
