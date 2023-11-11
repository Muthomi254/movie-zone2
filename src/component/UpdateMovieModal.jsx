import React from 'react';
import UpdateMovies from './UpdateMovies';

export default function UpdateMovieModal({ movie, show, handleCloseUpdateMovieModal }) {
  const modalStyle = show ? { display: 'block' } : { display: 'none' };
console.log("yof", movie, show, handleCloseUpdateMovieModal)
  return (
    <div
      className={`modal fade${show ? ' show' : ''}`}
      style={modalStyle}
      tabIndex="-1"
      role="dialog"
      aria-hidden={!show}
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseUpdateMovieModal}
            ></button>
          </div>
          <div class="modal-body">
<UpdateMovies  handleCloseUpdateMovieModal={handleCloseUpdateMovieModal}/>
          </div>
         
        </div>
      </div>
    </div>
  );
}
