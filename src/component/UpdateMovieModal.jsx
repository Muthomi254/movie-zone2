import React from 'react';
import UpdateMovies from './UpdateMovies';

export default function UpdateMovieModal({
  showUpdateMovieModal,
  movie,
  handleCloseUpdateMovieModal,
}) {
  const modalStyle = showUpdateMovieModal
    ? { display: 'block' }
    : { display: 'none' };


  const handleDeleteMovie = (movieId) => {
    console.log('DELETE', movieId);
    fetch(`http://localhost:4000/movies/${movieId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('DELETED', data);
      })
      .catch((error) => console.error('Error deleting movie:', error));
  };
  return (
    <div
      className={`modal fade${showUpdateMovieModal ? ' show' : ''}`}
      style={modalStyle}
      tabIndex="-1"
      role="dialog"
      aria-hidden={!showUpdateMovieModal}
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Admin Update and Delete Actions</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseUpdateMovieModal}
            ></button>
          </div>
          <div class="modal-body">
            <UpdateMovies
              handleCloseUpdateMovieModal={handleCloseUpdateMovieModal}
              movie={movie}
            />
          </div>
          <div className="modal-footer">
            <div className="row">
              <div className="col-sm-6">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteMovie(movie.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
