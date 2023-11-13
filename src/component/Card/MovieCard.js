import React, { useState } from 'react';
import MovieDescription from '../MovieDescription';
// import AddToWatchList from '../AddToWatchList';
import HomePageActions from './HomePageActions';
import EditPageActions from './EditPageActions';

const MovieCard = ({
  movie,
  isEditPage,
  isHomePage,
  isWatchListPage,
  handleRemoveFromWatchList,
}) => {
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
        {isHomePage && (
          <div className="card-footer">
            <HomePageActions
              movie={movie}
              handleViewDescription={handleViewDescription}
            />
          </div>
        )}

        {isEditPage && (
          <div className="card-footer">
            <EditPageActions
              handleViewDescription={handleViewDescription}
              movie={movie}
            />
          </div>
        )}

        {isWatchListPage && (
          <div className="card-footer">
            <button
              className="btn btn-danger"
              onClick={() => handleRemoveFromWatchList(movie.id)}
            >
              Remove from Watchlist
            </button>
          </div>
        )}
      </div>

      <MovieDescription
        movie={movie}
        show={showDescription}
        onHide={handleCloseDescription}
        isHomePage={isHomePage}
      />
    </>
  );
};

export default MovieCard;
