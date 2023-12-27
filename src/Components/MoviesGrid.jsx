import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import "../Styles/MoviesGrid.css";

const MoviesGrid = ({ movies }) => {
  const [movieStatuses, setMovieStatuses] = useState({});

  useEffect(() => {
    const initialStatuses = {};
    movies.forEach((movie) => {
      initialStatuses[movie.id] = "holdList";
    });
    setMovieStatuses(initialStatuses);
  }, [movies]);

  const handleStatusChange = (movieId, status) => {
    setMovieStatuses((prevStatuses) => ({
      ...prevStatuses,
      [movieId]: status,
    }));
  };

  return (
    <div className="container">
      {" "}
      <div className="movie-grid">
        {movies ? (
          movies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onStatusChange={handleStatusChange}
              currentStatus={movieStatuses[movie.id]}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MoviesGrid;
