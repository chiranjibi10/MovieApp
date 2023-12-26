import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesGrid from "./MoviesGrid.jsx";
import "../Styles/MovieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/tv?api_key=3158a25e97e7025565176d23afe36d11&language=en-GB&sort_by=popularity.desc`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="movielist">
      <h1 className="header">Movies For Refreshments</h1>
      <MoviesGrid movies={movies} />
    </div>
  );
};

export default MovieList;