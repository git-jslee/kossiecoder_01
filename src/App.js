import React, { useState } from "react";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";

function App() {
  const [movies, setMovies] = useState([
    { title: "CWCC-1", year: 2020 },
    { title: "CWCC-2", year: 2021 },
    { title: "CWCC-3", year: 2022 },
  ]);

  const renderMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.title} />;
  });

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    console.log(movie);
  };

  return (
    <div className="App">
      <h1>Movie list</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  );
}

export default App;
