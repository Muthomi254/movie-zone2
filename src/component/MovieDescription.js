// MovieDescription.js
import React from 'react';

const MovieDescription = ({ movie, show, onHide }) => {
  const modalStyle = show ? { display: 'block' } : { display: 'none' };

  return (
    <div
      className={`modal fade${show ? ' show' : ''}`}
      style={modalStyle}
      tabIndex="-1"
      role="dialog"
      aria-hidden={!show}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{movie.Series_Title}</h5>
            <button
              type="button"
              className="close"
              onClick={onHide}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={movie.Poster_Link}
                    className="img-fluid"
                    width={900}
                    alt={movie.Series_Title}
                  />
                </div>
                <div className="col-md-6 align-items-end">
                  <p>
                    <span className="fw-bolder">Released Year:</span>{' '}
                    {movie.Released_Year}
                  </p>
                  <p>
                    <span className="fw-bolder">Certificate:</span>{' '}
                    {movie.Certificate}
                  </p>
                  <p>
                    <span className="fw-bolder">Runtime:</span> {movie.Runtime}
                  </p>
                  <p>
                    <span className="fw-bolder">Genre: </span>
                    {movie.Genre}
                  </p>
                  <p>
                    <span className="fw-bolder">IMDB Rating: </span>
                    {movie.IMDB_Rating}
                  </p>
                  <p>
                    <span className="fw-bolder">Overview:</span>{' '}
                    {movie.Overview}
                  </p>
                  <p>
                    <span className="fw-bolder">Meta Score:</span>{' '}
                    {movie.Meta_score}
                  </p>
                  <p>
                    <span className="fw-bolder">Director:</span>{' '}
                    {movie.Director}
                  </p>
                  <p>
                    <span className="fw-bolder">Stars: </span>
                    {movie.Star1},{movie.Star2}, {movie.Star3}, {movie.Star4}
                  </p>
                  <p>
                    <span className="fw-bolder">No of Votes:</span>
                    {movie.No_of_Votes}
                  </p>
                  <p>
                    <span className="fw-bolder">Gross:</span> ${movie.Gross}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onHide}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
