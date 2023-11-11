import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieDisplay = ({ selectedCategory, searchTerm, watchList }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data', data);
      })
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  // useEffect(() => {
  //   if (selectedCategory && selectedCategory !== 'All') {
  //     const filtered = movies.filter(
  //       (movie) => movie.Genre === selectedCategory
  //     );
  //     setFilteredMovies(filtered);
  //   } else {
  //     setFilteredMovies(movies);
  //   }
  // }, [movies, selectedCategory]);

  // useEffect(() => {
  //   const filtered = movies.filter((movie) =>
  //     movie.Series_Title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredMovies(filtered);
  // }, [searchTerm, movies]);

  // const handleWatchLater = (movie) => {
  //   fetch(`http://localhost:4000/movies/${movie.Series_Title}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ Watch_list: true }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Assuming the server returns the updated movie
  //       // You can update the state or perform any necessary actions
  //       console.log('Movie added to Watchlist:', data);
  //     })
  //     .catch((error) => console.error('Error updating watch list:', error));
  // };

  return (
    <div className="container py-5">
      <h3>All Movies</h3>
      {/* <div className="row row-cols-1 row-cols-md-5">
        {filteredMovies.map((movie) => (
          <div key={movie.Series_Title} className="col mb-4">
            {watchList ? (
              // Display in watchlist
              <MovieCard movie={movie} onWatchLater={handleWatchLater} />
            ) : (
              // Display in editmovies and moviedisplay
              <Link to={`/movies/${movie.Series_Title}`}>
                <MovieCard movie={movie} onWatchLater={handleWatchLater} />
              </Link>
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MovieDisplay;
