import React, { useState } from 'react';
import UpdateMovieModal from '../UpdateMovieModal';

export default function EditPageActions({ handleViewDescription, movie }) {
  const [showUpdateMovieModal, setUpdateMovieModal] = useState(false);

  const handleOpenUpdateMovieModal = () => {
    setUpdateMovieModal(true);
  };

  const handleCloseUpdateMovieModal = () => {
    setUpdateMovieModal(false);
  };
  return (
    <div className="row">
      <div className="col">
        <button
          className="btn btn-outline-success"
          onClick={() => handleViewDescription()}
        >
          View Movie
        </button>
      </div>
      <div className="col">
        <button
          className="btn btn-outline-primary"
          onClick={handleOpenUpdateMovieModal}
        >
          Edit
        </button>
      </div>

      <UpdateMovieModal
        showUpdateMovieModal={showUpdateMovieModal}
        movie={movie}
        handleCloseUpdateMovieModal={handleCloseUpdateMovieModal}
      />
    </div>
  );
}
