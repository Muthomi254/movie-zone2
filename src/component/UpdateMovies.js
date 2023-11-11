import React, { useState, useEffect } from 'react';

const UpdateMovies = ({ movie, onUpdate }) => {
  const [updatedMovie, setUpdatedMovie] = useState({ ...movie });

  useEffect(() => {
    setUpdatedMovie({ ...movie });
  }, [movie]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // Assume you have an API endpoint for updating movies
    fetch(`http://localhost:4000/movies/${movie.Series_Title}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming the server returns the updated movie
        onUpdate(movie.Series_Title, data);
      })
      .catch((error) => console.error('Error updating movie:', error));
  };

  return (
    <div className="container mt-4">
      <h3>Update Movie</h3>
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <label>Poster Link:</label>
            <input
              type="text"
              className="form-control"
              name="Poster_Link"
              value={updatedMovie.Poster_Link}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Series Title:</label>
            <input
              type="text"
              className="form-control"
              name="Series_Title"
              value={updatedMovie.Series_Title}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Released Year:</label>
            <input
              type="text"
              className="form-control"
              name="Released_Year"
              value={updatedMovie.Released_Year}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Certificate:</label>
            <input
              type="text"
              className="form-control"
              name="Certificate"
              value={updatedMovie.Certificate}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <label>Runtime:</label>
            <input
              type="text"
              className="form-control"
              name="Runtime"
              value={updatedMovie.Runtime}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Genre:</label>
            <input
              type="sort"
              className="form-control"
              name="Genre"
              value={updatedMovie.Genre}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>IMDB Rating:</label>
            <input
              type="text"
              className="form-control"
              name="IMDB_Rating"
              value={updatedMovie.IMDB_Rating}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Overview:</label>
            <input
              type="text"
              className="form-control"
              name="Overview"
              value={updatedMovie.Overview}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <label>Meta Score:</label>
            <input
              type="text"
              className="form-control"
              name="Meta_score"
              value={updatedMovie.Meta_score}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Director:</label>
            <input
              type="text"
              className="form-control"
              name="Director"
              value={updatedMovie.Director}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Star 1:</label>
            <input
              type="text"
              className="form-control"
              name="Star1"
              value={updatedMovie.Star1}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Star 2:</label>
            <input
              type="text"
              className="form-control"
              name="Star2"
              value={updatedMovie.Star2}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <label>Star 3:</label>
            <input
              type="text"
              className="form-control"
              name="Star3"
              value={updatedMovie.Star3}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Star 4:</label>
            <input
              type="text"
              className="form-control"
              name="Star4"
              value={updatedMovie.Star4}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>No. of Votes:</label>
            <input
              type="text"
              className="form-control"
              name="No_of_Votes"
              value={updatedMovie.No_of_Votes}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Gross:</label>
            <input
              type="text"
              className="form-control"
              name="Gross"
              value={updatedMovie.Gross}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Row 5 */}
      <div className="row">
        {/* Add other form inputs for updating movie properties */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update Movie
        </button>
      </div>
    </div>
  );
};

export default UpdateMovies;
