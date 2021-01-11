import React, { useState } from "react";
import { Link } from "react-router-dom";
import MoviesList from "../components/MoviesList";
import Search from "../components/Search";
import movies from "../assets/movies.json";

const Home = () => {
  const [results, setResults] = useState(movies);

  const searchResult = (event) => {
    let newResults = [];
    for (let i = 0; i < movies.results.length; i++) {
      if (movies.results[i].keywords(event.target.value.toLowerCase()) !== -1) {
        newResults.push(movies[i]);
      } else {
        console.log("c'est pas bon");
      }
    }
    setResults(newResults);
  };

  return (
    <div className="background">
      <Search searchResult={searchResult} />
      <Link to={"/moviesdetails"}>
        {results.results.map((movie, index) => {
          return <MoviesList key={index} movie={movie} />;
        })}
      </Link>
    </div>
  );
};

export default Home;
