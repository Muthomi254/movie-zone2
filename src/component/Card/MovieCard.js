import React, { useState } from 'react';
import MovieDescription from '../MovieDescription';
import AddToWatchList from '../AddToWatchList';
import HomePageActions from './HomePageActions';

const MovieCard = ({
  movie,
  handleDelete,
  onRemoveFromWatchList,
  showDeleteButton,
  handleEdit,
  isWatchListPage,
  onWatchLater,
  isEditPage,
  isHomePage,
}) => {
  console.log('Home', isHomePage);
  const [showDescription, setShowDescription] = useState(false);

  const handleViewDescription = () => {
    setShowDescription(true);
  };

  const handleCloseDescription = () => {
    setShowDescription(false);
  };

  return (
    <>
      <div className="card">
        <img src={movie.posterUrl} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title fw-bolder">{movie.title}</h5>
          <p className="card-text">
            <span className="fw-bold">Genre: </span>
            {movie.genres}
          </p>
          <p className="card-text">
            <span className="fw-bold">Year:</span> {movie.year}
          </p>
        </div>
        <div className="card-footer">
          {isHomePage && (
            <HomePageActions
              movie={movie}
              handleViewDescription={handleViewDescription}
            />
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
