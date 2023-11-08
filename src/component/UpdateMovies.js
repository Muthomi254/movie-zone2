import React, { useState } from 'react';

const UpdateMovieForm = ({ movie, onUpdate }) => {
  const [formData, setFormData] = useState({
    Poster_Link: movie.Poster_Link,
    Series_Title: movie.Series_Title,
    Released_Year: movie.Released_Year,
    Certificate: movie.Certificate,
    Runtime: movie.Runtime,
    Genre: movie.Genre,
    IMDB_Rating: movie.IMDB_Rating,
    Overview: movie.Overview,
    Meta_score: movie.Meta_score,
    Director: movie.Director,
    Star1: movie.Star1,
    Star2: movie.Star2,
    Star3: movie.Star3,
    Star4: movie.Star4,
    No_of_Votes: movie.No_of_Votes,
    Gross: movie.Gross,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    // Use fetch or your preferred method to update the movie on the server
    fetch(`http://localhost:4000/movies/${movie.Series_Title}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        onUpdate(movie.Series_Title, data); // Assuming the server returns the updated movie
      })
      .catch((error) => console.error('Error updating movie:', error));
  };

  return (
    <div>
      <h3>Update Movie</h3>
      {/* Add input fields for each movie property */}
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleUpdate}
      >
        Update
      </button>
    </div>
  );
};

export default UpdateMovieForm;
