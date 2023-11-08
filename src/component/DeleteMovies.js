import React from 'react'
import { useState } from 'react';

function DeleteMovies() {

  const [movieTitle, setMovieTitle] = useState()
  return (
    <div className="container">
      Delete Movies
      <div>
        <div className="form-group">
          <label>Series_Title:</label>
          <input
            className="form-control"
            type="text"
            value={movie.Series_Title}
            aria-label="Movie_Title"
            readOnly
          />
          <button type="button" class="btn btn-outline-danger">
            Delete
          </button>
          ;
        </div>
      </div>
    </div>
  );
}

export default DeleteMovies


