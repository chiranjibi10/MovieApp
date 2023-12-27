import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import "../Styles/MoviesGrid.css";

const MoviesGrid = ({ movies }) => {
  const [movieStatuses, setMovieStatuses] = useState({});

  useEffect(() => {
    const initialStatuses = {};
    movies.forEach((movie) => {
      const storedStatus = localStorage.getItem(`movieStatus_${movie.id}`);
      if (storedStatus) {
        initialStatuses[movie.id] = storedStatus;
      } else {
        initialStatuses[movie.id] = "unwatched";
      }
    });
    setMovieStatuses(initialStatuses);
  }, [movies]);

  const handleStatusChange = (movieId, status) => {
    setMovieStatuses((prevStatuses) => ({
      ...prevStatuses,
      [movieId]: status,
    }));
  };

  const [select, setSelect] = useState("unwatched");

  return (
    <div className="container">
      <div>
        <button onClick={() => setSelect("unwatched")}>Unwatched</button>
        <button onClick={() => setSelect("watching")}>Watching</button>
        <button onClick={() => setSelect("completed")}>Completed</button>
        <button onClick={() => setSelect("holdList")}>Hold</button>
      </div>
      <h1>{select.toUpperCase()} MOVIES</h1>
      <div className="movie-grid">
        {movies ? (
          movies.map((movie) => {
            if (
              movieStatuses[movie.id]?.toUpperCase() === select.toUpperCase()
            ) {
              return (
                <MovieItem
                  key={movie.id}
                  movie={movie}
                  onStatusChange={handleStatusChange}
                  currentStatus={movieStatuses[movie.id]}
                />
              );
            } else {
              return false;
            }
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MoviesGrid;
