import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesGrid from "./MoviesGrid.jsx";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=3158a25e97e7025565176d23afe36d11&language=en-GB&sort_by=popularity.desc`
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
      <MoviesGrid movies={movies} />
    </div>
  );
};

export default MovieList;
