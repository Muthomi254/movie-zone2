import React, { useState } from 'react';

const AddMovie = ({ onAdd }) => {
  const initialFormData = {
    Poster_Link: '',
    Series_Title: '',
    Released_Year: '',
    Certificate: '',
    Runtime: '',
    Genre: '',
    IMDB_Rating: '',
    Overview: '',
    Meta_score: '',
    Director: '',
    Star1: '',
    Star2: '',
    Star3: '',
    Star4: '',
    No_of_Votes: '',
    Gross: '',
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
    <div className="container mt-4">
      <h3>Add Movie</h3>
      <div className="row">
        {/* Row 1 */}
        <div className="col-md-3">
          <div className="form-group">
            <label>Poster Link:</label>
            <input
              type="text"
              className="form-control"
              name="Poster_Link"
              value={formData.Poster_Link}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Series Title:</label>
            <input
              type="text"
              className="form-control"
              name="Series_Title"
              value={formData.Series_Title}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Released Year:</label>
            <input
              type="text"
              className="form-control"
              name="Released_Year"
              value={formData.Released_Year}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Certificate:</label>
            <input
              type="text"
              className="form-control"
              name="Certificate"
              value={formData.Certificate}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <label>Runtime:</label>
            <input
              type="text"
              className="form-control"
              name="Runtime"
              value={formData.Runtime}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Genre:</label>
            <input
              type="text"
              className="form-control"
              name="Genre"
              value={formData.Genre}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>IMDB Rating:</label>
            <input
              type="text"
              className="form-control"
              name="IMDB_Rating"
              value={formData.IMDB_Rating}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Overview:</label>
            <input
              type="text"
              className="form-control"
              name="Overview"
              value={formData.Overview}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <label>Meta Score:</label>
            <input
              type="text"
              className="form-control"
              name="Meta_score"
              value={formData.Meta_score}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Director:</label>
            <input
              type="text"
              className="form-control"
              name="Director"
              value={formData.Director}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Star 1:</label>
            <input
              type="text"
              className="form-control"
              name="Star1"
              value={formData.Star1}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Star 2:</label>
            <input
              type="text"
              className="form-control"
              name="Star2"
              value={formData.Star2}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <label>Star 3:</label>
            <input
              type="text"
              className="form-control"
              name="Star3"
              value={formData.Star3}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Star 4:</label>
            <input
              type="text"
              className="form-control"
              name="Star4"
              value={formData.Star4}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>No. of Votes:</label>
            <input
              type="text"
              className="form-control"
              name="No_of_Votes"
              value={formData.No_of_Votes}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Gross:</label>
            <input
              type="text"
              className="form-control"
              name="Gross"
              value={formData.Gross}
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
