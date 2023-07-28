import React, { useEffect } from "react";
import { movies } from "../data";

function Movies() {
 
  const moviedetails = movies.map(movie=>{
    return(
      <div>
        <h2> {movie.title}</h2>
        <h3>{movie.time}</h3>
        
        {movie.genres.map(genre=>{
          console.log(genre);
          <ul>
          <li >{genre}</li>
          </ul>
         
        })}

        
      </div>
    )
  })
  return <div>
  <h1>MoviesPage</h1>
   
   {moviedetails}
  

  </div>;
}

export default Movies;
