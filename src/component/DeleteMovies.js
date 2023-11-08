import React, { useState } from 'react';

const DeleteMovieForm = ({ onDelete }) => {
  const [movieTitle, setMovieTitle] = useState('');

  const handleDelete = () => {
    // Use fetch or your preferred method to delete the movie on the server
    fetch(`http://localhost:4000/movies/${movieTitle}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        onDelete(movieTitle); // Assuming the server returns the deleted movie title
      })
      .catch((error) => console.error('Error deleting movie:', error));
  };

  return (
    <div>
      <h3>Delete Movie</h3>
      <div className="form-group">
        <label>Series Title:</label>
        <input
          className="form-control"
          type="text"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteMovieForm;
