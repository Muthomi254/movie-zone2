// MovieCard.js
import React, { useState } from 'react';
import MovieDescription from './MovieDescription';

const MovieCard = ({
  movie,
  onWatchLater,
  onDelete,
  onRemoveFromWatchList,
  showDeleteButton,
  onEdit,
  isWatchListPage, // Added isWatchListPage prop
}) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleCardClick = () => {
    setShowDescription(true);
  };

  const handleCloseDescription = () => {
    setShowDescription(false);
  };

  return (
    <>
      <div
        className="card"
        style={{ height: '100%', cursor: 'pointer' }}
        onClick={handleCardClick}
      >
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
              className="btn btn-outline-danger mx-2"
              onClick={() => onDelete(movie.Series_Title)}
            >
              Delete
            </button>
          )}
          {!showDeleteButton && !isWatchListPage && (
            <button
              type="button"
              className="btn btn-outline-primary mx-2"
              onClick={() => onWatchLater(movie)}
            >
              Watch Later
            </button>
          )}
          {!showDeleteButton && isWatchListPage && (
            <button
              type="button"
              className="btn btn-outline-danger mx-2"
              onClick={() => onRemoveFromWatchList(movie)}
            >
              Remove from Watch List
            </button>
          )}
          {onEdit && (
            <button
              type="button"
              className="btn btn-outline-secondary mx-2"
              onClick={() => onEdit(movie)}
            >
              Edit
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
