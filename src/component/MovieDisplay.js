// MovieDisplay.js
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieDisplay = ({ selectedCategory, searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  useEffect(() => {
    if (selectedCategory && selectedCategory !== 'All') {
      const filtered = movies.filter(
        (movie) => movie.Genre === selectedCategory
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  }, [movies, selectedCategory]);

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.Series_Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchTerm, movies]);

  const handleWatchLater = (movie) => {
    // Implement the logic to add the movie to the watch list
    // You can make a fetch request to update the Watch_list status
  };

  return (
    <div className="container py-5">
      <h3>All Movies</h3>
      <div className="row row-cols-1 row-cols-md-5">
        {filteredMovies.map((movie) => (
          <div key={movie.Series_Title} className="col mb-4">
            <MovieCard movie={movie} onWatchLater={handleWatchLater} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDisplay;
