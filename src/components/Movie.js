import React from "react";

function Movie({ movie, key }) {
  console.log(movie);
  return (
    <div className="movie">
      <div className="movie-title">{movie.title}</div>
      <div className="movie-year">{movie.year}</div>
    </div>
  );
}

export default Movie;
