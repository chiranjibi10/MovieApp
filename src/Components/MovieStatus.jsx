import React, { useState, useEffect } from "react";
import "../Styles/MovieStatus.css";

const MovieStatus = ({ movie, onStatusChange }) => {
  const [status, setStatus] = useState("holdList");

  useEffect(() => {
    const storedStatus = localStorage.getItem(`movieStatus_${movie.id}`);
    setStatus(storedStatus || "holdList");
  }, [movie.id]);

  const handleStatusChange = (e) => {
    const selectedStatus = e.target.value;
    setStatus(selectedStatus);
    onStatusChange(movie.id, selectedStatus);

    localStorage.setItem(`movieStatus_${movie.id}`, selectedStatus);
  };

  return (
    <select onChange={handleStatusChange} value={status}>
      <option value="watching">Watching</option>
      <option value="completed">Completed</option>
      <option value="holdList">Watch Me</option>
    </select>
  );
};

export default MovieStatus;
