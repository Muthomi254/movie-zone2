import React, { useState, useEffect } from 'react';

const UpdateMovies = ({ movie, handleCloseUpdateMovieModal }) => {
  const [updatedMovie, setUpdatedMovie] = useState({ ...movie });

  useEffect(() => {
    setUpdatedMovie({ ...movie });
  }, [movie]);

  const handleUpdateMovie = async () => {
    try {
      
      const response = await fetch(
        `https://movie-zone2-react.onrender.com/api/movies/${updatedMovie.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedMovie),
        }
      );
      if (response.ok){
      const data = await response.json();
      handleCloseUpdateMovieModal();
      }
    } catch (error) {
      console.log('ERROR UPDATING', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  return (
    <div>
      <h3 className="text-center">Update Movie ID: {movie.id}</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Title:</label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={updatedMovie.title}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Year:</label>
            <input
              className="form-control"
              type="text"
              name="year"
              value={updatedMovie.year}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label>Poster Link:</label>
            <input
              type="text"
              className="form-control"
              name="posterUrl"
              value={updatedMovie.posterUrl}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>RunTime:</label>
            <input
              className="form-control"
              type="text"
              name="runtime"
              value={updatedMovie.runtime}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Director:</label>
            <input
              className="form-control"
              type="text"
              name="director"
              value={updatedMovie.director}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label>Genres:</label>
            <input
              type="text"
              className="form-control"
              name="genres"
              value={updatedMovie.genres}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label>Plot:</label>
            <textarea
              type="text"
              className="form-control"
              name="plot"
              value={updatedMovie.plot}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <button className="col-md-12 btn btn-info" onClick={handleUpdateMovie}>
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateMovies;
