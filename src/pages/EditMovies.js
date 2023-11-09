// EditMovies.js
import React, { useState, useEffect } from 'react';
import AddMovies from '../component/AddMovies';
import UpdateMovies from '../component/UpdateMovies';
import DeleteMovies from '../component/DeleteMovies';
import MovieCard from '../component/MovieCard'; // Import the modified MovieCard
import NavBar from '../layout/NavBar';

const EditMovies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch movies from the server
    fetch('http://localhost:4000/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleUpdate = (title, updatedMovie) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.Series_Title === title ? updatedMovie : movie
      )
    );
    setSelectedMovie(null);
  };

  const handleDelete = (title) => {
    setMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.Series_Title !== title)
    );
    setSelectedMovie(null);
  };

  const handleEdit = (movie) => {
    setSelectedMovie(movie);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      
      <NavBar onSearch={handleSearch} />

      <div className="container">
        <div className="row">
          <div className="col-md-6 py-5">
            <AddMovies onAdd={handleAdd} />
          </div>
          <div className="col-md-6 py-5">
            {selectedMovie ? (
              <>
                <UpdateMovies movie={selectedMovie} onUpdate={handleUpdate} />
                <DeleteMovies movie={selectedMovie} onDelete={handleDelete} />
              </>
            ) : (
              <div>
                <h3>Select a movie to edit or delete.</h3>
                <DeleteMovies />
              </div>
            )}
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4">
          {movies
            .filter((movie) =>
              movie.Series_Title.toLowerCase().includes(
                searchTerm.toLowerCase()
              )
            )
            .map((movie) => (
              <div key={movie.Series_Title} className="col mb-4">
                <MovieCard
                  movie={movie}
                  onDelete={handleDelete}
                  showDeleteButton={true}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EditMovies;
