// EditMovies.js
import React, { useState, useEffect } from 'react';
import AddMovies from '../component/AddMovies';
import UpdateMovies from '../component/UpdateMovies';
import DeleteMovies from '../component/DeleteMovies';
import MovieCard from '../component/MovieCard';
import NavBar from '../layout/NavBar';
import { Link } from 'react-router-dom';

const EditMovies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const showDeleteButton = true;
  const [searchTerm, setSearchTerm] = useState('');
  const isEditPage = true;

  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  const handleAdd = (newMovie) => {
    fetch('http://localhost:4000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies([...movies, data]);
      })
      .catch((error) => console.error('Error adding movie:', error));
  };

  const handleUpdate = (movie, updatedMovie) => {
    fetch(`http://localhost:4000/movies/${movie.Series_Title}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies((prevMovies) =>
          prevMovies.map((prevMovie) =>
            prevMovie.Series_Title === movie.Series_Title ? data : prevMovie
          )
        );
        setSelectedMovie(null);
      })
      .catch((error) => console.error('Error updating movie:', error));
  };

  const handleDelete = (movie) => {

    console.log('Hey', movie);
    fetch(`http://localhost:4000/movies/${movie}`, {
      method: 'DELETE',
    })
      .then((data) => {
        console.log('Delete', data)
      })
      .catch((error) => console.error('Error deleting movie:', error));

  };

  const handleEdit = (movie) => {
    setSelectedMovie(movie);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleWatchLater = (movie) => {
    fetch(`http://localhost:4000/movies/${movie.Series_Title}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Watch_list: true }),
    })
      .then((response) => response.json())
      .then((data) => {
        handleUpdate(movie, data);
      })
      .catch((error) => console.error('Error updating watch list:', error));
  };

  return (
    <div>
      <NavBar onSearch={handleSearch} />

      <div className="container">
        <div className="row">
          <div className="col-md-6 py-5">
            <AddMovies onAdd={handleAdd} />
          </div>
          {/* <div className="col-md-6 py-5">
            {selectedMovie ? (
              <>
                <UpdateMovies movie={selectedMovie} onUpdate={handleUpdate} />
                <DeleteMovies movie={selectedMovie} onDelete={handleDelete} />
              </>
            ) : (
              <div>
                <h3>Select a movie to edit or delete.</h3>
              </div>
            )}
          </div> */}
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
                {/* <Link to={`/movies/${movie.Series_Title}`}> */}
                <MovieCard
                  movie={movie}
                  onWatchLater={handleWatchLater}
                  handleDelete={handleDelete}
                  showDeleteButton={showDeleteButton}
                  handleEdit={handleEdit}
                  isEditPage={isEditPage}
                />
                {/* </Link> */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EditMovies;
