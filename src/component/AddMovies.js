import React, { useState } from 'react';

const AddMovie = ({ onAdd }) => {
  const initialFormData = {
    Poster_Link: '',
    title: '',
    year: '',
    actors: '',
    runtime: '',
    director: '',
    genres: '',
    
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    // Assume you have an API endpoint for adding movies
    fetch('http://localhost:4000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming the server returns the added movie
        onAdd(data);
        setFormData(initialFormData); // Reset the form data after adding
      })
      .catch((error) => console.error('Error adding movie:', error));
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
              value={formData.title}
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
              value={formData.year}
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
              value={formData.posterUrl}
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
              value={formData.runtime}
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
              value={formData.director}
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
              value={formData.genres}
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
              value={formData.plot}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <button type="button" className="btn btn-primary" onClick={handleAdd}>
        Add Movie
      </button>
    </div>
  );
};

export default AddMovie;
