import React, { useState, useEffect } from 'react';
import MovieCard from '../component/Card/MovieCard';
import Layout from '../layout/Layout';
import AddMovie from '../component/AddMovies';

const EditMovies = () => {
  const [movies, setMovies] = useState([]);
  const [showAddMovie, setShowAddMovie] = useState(false);
  const showDeleteButton = true;
  const isEditPage = true;

  const handleDisplayAddMovieComponent = () => {
    setShowAddMovie(!showAddMovie);
  };

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const response = await fetch('http://localhost:4000/movies');
        if (response.ok) {
          const data = await response.json();
          setMovies(data);
        }
      } catch (err) {
        console.error('ERROR ON MOUNT::', err);
      }
    };

    fetchAllMovies();
  }, [movies]);

  return (
    <Layout>
      <div className="row mt-2">
        <div className="col-md-4">
          <button
            className="btn btn-outline-info"
            onClick={() => handleDisplayAddMovieComponent()}
          >
            Add New Movie
          </button>
        </div>
        <div className="col-md-8">{showAddMovie && <AddMovie />}</div>
      </div>
      <div className="row">
        <h3 className="text-center">Available Movies</h3>
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-3">
            <MovieCard
              movie={movie}
              showDeleteButton={showDeleteButton}
              isEditPage={isEditPage}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default EditMovies;
