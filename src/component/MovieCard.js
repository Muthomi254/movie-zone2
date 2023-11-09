// MovieCard.js
import React, { useState } from 'react';
import MovieDescription from './MovieDescription';
import DeleteMovies from './DeleteMovies';

const MovieCard = ({ movie, onDelete, showDeleteButton }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleCardClick = () => {
    setShowDescription(true);
  };

  const handleCloseDescription = () => {
    setShowDescription(false);
  };

  return (
    <>
      <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
        <img
          src={movie.Poster_Link}
          className="card-img-top"
          alt={movie.Series_Title}
        />
        <div className="card-body">
          <h5 className="card-title fw-bolder">{movie.Series_Title}</h5>
          <p className="card-text">
            <span className="fw-bold">Genre: </span>
            {movie.Genre}
          </p>
          <p className="card-text">
            <span className="fw-bold">IMDB Rating:</span> {movie.IMDB_Rating}
          </p>
          {showDeleteButton && (
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => onDelete(movie.Series_Title)}
            >
              Delete
            </button>
          )}
        </div>
      </div>

      <MovieDescription
        movie={movie}
        show={showDescription}
        onHide={handleCloseDescription}
      />
    </>
  );
};

export default MovieCard;
