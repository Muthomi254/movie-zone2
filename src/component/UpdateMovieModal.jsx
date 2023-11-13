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
  console.log('yof', movie, showUpdateMovieModal, handleCloseUpdateMovieModal);
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
            />
          </div>
          <div className="modal-footer">
            <div className="row">
              <div className="col-sm-6">
                <button className="btn btn-info">Update</button>
              </div>
              <div className="col-sm-6">
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
