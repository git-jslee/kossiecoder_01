import React, { useState, useEffect } from "react";

function App() {
  const movies = [
    { title: "cwcc1", year: 2020 },
    { title: "cwcc2", year: 2021 },
    { title: "cwcc3", year: 2022 },
  ];

  const renderMovies = movies.map((movie) => {
    return (
      <div className="movie" key={movie.title}>
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Movie list</h1>
      {renderMovies}
    </div>
  );
}

export default App;
