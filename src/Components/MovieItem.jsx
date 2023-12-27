import React from "react";
import MovieStatus from "./MovieStatus";
import "../Styles/MovieItem.css";

const MovieItem = ({ movie, onStatusChange }) => {
  const { title, vote_average, overview, poster_path, release_date } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={imageUrl} alt={`${title} poster`} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{overview}</p>
        <h3 className="card-text">Rating : {vote_average}</h3>
        <h3 className="card-text">Release Date:{release_date}</h3>
        <div className="status">
          <p>
            Status:{""}
            <MovieStatus movie={movie} onStatusChange={onStatusChange} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
