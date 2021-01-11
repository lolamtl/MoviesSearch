import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
import MoviesDetails from "../components/MoviesDetails";

const MoviesDescription = () => {
  //   const { id } = useParams();
  //   const [data, setData] = useState({});
  //   const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://marvel-backlola.herokuapp.com/card/${id}`
  //         );
  //         console.log(response.data);
  //         setData(response.data);
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //       setIsLoading(false);
  //     };
  //     fetchData();
  //   }, [id]);

  return (
    <div>
      <p>DESCRIPTION FILM</p>
      <MoviesDetails />
    </div>
    // <div className="caractères">
    //   <div className="container">
    //     {data.results.map((card, index) => {
    //       return (
    //         <div className="withcomics">
    //           <div className="card" key={index}>
    //             <h4 className="title">{card.name}</h4>
    //             <img
    //               className="img"
    //               alt="caractimg"
    //               src={card.thumbnail.path + "/portrait_incredible.jpg"}
    //             />

    //             <p className="descriptioncard">{card.description}</p>
    //           </div>
    //           {card.comics.items.map((item, index) => {
    //             return (
    //               <div className="comics" key={index}>
    //                 <h4 className="title">{item.name}</h4>
    //                 {/* URL  */}
    //                 <img alt="comics" src={item.resourceURI} />
    //               </div>
    //             );
    //           })}
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default MoviesDescription;
