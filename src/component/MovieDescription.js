import React, { useEffect, useState } from 'react';
import UpdateMovies from './UpdateMovies';
import UpdateMovieModal from './UpdateMovieModal';
import UpdateMovieActions from './Card/UpdateMovieActions';

const MovieDescription = ({ movie, show, onHide, isHomePage, isEditPage }) => {
  const modalStyle = show ? { display: 'block' } : { display: 'none' };
  const [updateMovieDialog, setUpdateMovieDialog] = useState(false);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    if (movie.genres != []) {
      setGenres(movie.genres);
    }
  }, [movie.genres]);

  const handleOpenUpdateMovieModal = () => {
    console.log('This button is clicked');
    setUpdateMovieDialog(true);
  };

  const handleCloseUpdateMovieModal = () => {
    setUpdateMovieDialog(false);
  };
  return (
    <>
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
              <h5 className="modal-title">{movie.title}</h5>
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
                      src={movie.posterUrl}
                      className="img-fluid"
                      width={900}
                      alt={movie.title}
                    />
                  </div>
                  <div className="col-md-6 align-items-end">
                    <p>
                      <span className="fw-bolder">Released Year:</span>{' '}
                      {movie.year}
                    </p>

                    <p>
                      <span className="fw-bolder">Runtime:</span>{' '}
                      {movie.runtime}
                    </p>
                    <div className="row">
                      <p className=" col">Genre: </p>
                      {genres.map((genre) => (
                        <p className="col" key={genre.key}>
                          {genre}
                        </p>
                      ))}
                    </div>
                    <p>
                      <span className="fw-bolder">Plot: </span>
                      {movie.plot}
                    </p>

                    <p>
                      <span className="fw-bolder">Director:</span>{' '}
                      {movie.director}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {isEditPage && (
              <div className="modal-footer">
                <UpdateMovieActions />
              </div>
            )}
          </div>
        </div>
      </div>
      {updateMovieDialog && (
        <UpdateMovieModal
          movie={movie}
          show={updateMovieDialog}
          handleCloseUpdateMovieModal={handleCloseUpdateMovieModal}
        />
      )}
    </>
  );
};

export default MovieDescription;
