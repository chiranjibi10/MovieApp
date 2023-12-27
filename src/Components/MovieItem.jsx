import React, { useState } from "react";
import MovieStatus from "./MovieStatus";
import "../Styles/MovieItem.css";

const MovieItem = ({ movie, onStatusChange }) => {
  const { title, vote_average, overview, poster_path, release_date } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`card ${expanded ? "expanded" : ""}`}
      style={{ width: "18rem" }}
    >
      <img className="card-img-top" src={imageUrl} alt={`${title} poster`} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className={`card-text ${expanded ? "expanded" : ""}`}>{overview}</p>
        <p className="card-text">Rating: {vote_average}</p>
        <p className="card-text">Release Date: {release_date}</p>
        <div className="status">
          <p>
            Status:{" "}
            <MovieStatus movie={movie} onStatusChange={onStatusChange} />
          </p>
        </div>
        <p className="read-more-button" onClick={toggleContent}>
          {expanded ? "Read Less" : "Read More"}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
