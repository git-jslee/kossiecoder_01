import React from "react";
import Movie from "./components/Movie";

function App() {
  const movies = [
    { title: "cwcc1", year: 2020 },
    { title: "cwcc2", year: 2021 },
    { title: "cwcc3", year: 2022 },
  ];

  const renderMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.title} />;
  });

  return (
    <div className="App">
      <h1>Movie list</h1>
      {renderMovies}
    </div>
  );
}

export default App;
