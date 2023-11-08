import React, { useState } from 'react';

const AddMovieForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
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
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    // Use fetch or your preferred method to add the movie on the server
    fetch('http://localhost:4000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        onAdd(data); // Assuming the server returns the added movie
      })
      .catch((error) => console.error('Error adding movie:', error));
  };

  return (
    <div>
      <h3>Add Movie</h3>
      {/* Add input fields for each movie property */}
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddMovieForm;
