import React from 'react';

export default function UpdateMovieActions({ onHide, handleOpenUpdateMovieModal }) {
  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleOpenUpdateMovieModal}
      >
        Update
      </button>
      <button type="button" className="btn btn-secondary" onClick={onHide}>
        Close
      </button>
    </>
  );
}
