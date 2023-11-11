// MovieCard.js
import React, { useState } from 'react';
import MovieDescription from './MovieDescription';
import AddToWatchList from './AddToWatchList';
const MovieCard = ({
  movie,
  handleDelete,
  onRemoveFromWatchList,
  showDeleteButton,
  handleEdit,
  isWatchListPage,
  onWatchLater,
  isEditPage,
}) => {
  // console.log('Rada', isEditPage, typeof handleDelete, handleDelete);
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
        // onClick={handleCardClick}
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
          
          {showDeleteButton && isEditPage && (
            <button
              type="button"
              className="btn btn-outline-danger mx-2"
              onClick={() => handleDelete(movie.Series_Title)}
            >
              Delete
            </button>
          )}
          {!showDeleteButton && !isWatchListPage && (
            <AddToWatchList movie={movie} onAddToWatchList={onWatchLater} />
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
          {handleEdit && (
            <button
              type="button"
              className="btn btn-outline-secondary mx-2"
              onClick={() => handleEdit(movie)}
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
