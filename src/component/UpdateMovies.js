import React from 'react';

const UpdateMovies = ({ movie }) => {

 const [formData, setFormData] = useState({
   Poster_Link: `${movie.Poster_Link}`,
   Series_Title: `${movie.Series_Title}`,
   Released_Year: `${movie.Released_Year}`,
   Certificate: `${movie.Certificate}`,
   Runtime: `${movie.Runtime}`,
   Genre: `${movie.Genre}`,
   IMDB_Rating: `${movie.IMDB_Rating}`,
   Overview: `${movie.Overview}`,
   Meta_score: `${movie.Meta_score}`,
   Director: `${movie.Director}`,
   Star1: `${movie.Star1}`,
   Star2: `${movie.Star2}`,
   Star3: `${movie.Star3}`,
   Star4: `${movie.Star4}`,
   No_of_Votes: `${movie.No_of_Votes}`,
   Gross: `${movie.Gross}`,
 });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          Update Movies
          <div className="form-group">
            <label>Poster Link:</label>
            <input
              className="form-control"
              type="text"
              value={movie.Poster_Link}
              aria-label="Poster Link"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Series Title:</label>
            <input
              className="form-control"
              type="text"
              value={movie.Series_Title}
              aria-label="Series Title"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Released Year:</label>
            <input
              className="form-control"
              type="text"
              value={movie.Released_Year}
              aria-label="Released Year"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Certificate:</label>
            <input
              className="form-control"
              type="text"
              value={movie.Certificate}
              aria-label="Certificate"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Runtime:</label>
            <input
              className="form-control"
              type="text"
              value={movie.Runtime}
              aria-label="Runtime"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Genre:</label>
            <input
              className="form-control"
              type="text"
              value={movie.Genre}
              aria-label="Genre"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>IMDB Rating:</label>
            <input
              className="form-control"
              type="text"
              value={movie.IMDB_Rating}
              aria-label="IMDB Rating"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Overview:</label>
            <textarea
              className="form-control"
              value={movie.Overview}
              aria-label="Overview"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Meta Score:</label>
            <input
              className="form-control"
              type="text"
              value={movie.Meta_score}
              aria-label="Meta Score"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Director:</label>
            <input
              className="form-control"
              type="text"
              value={movie.Director}
              aria-label="Director"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Star 1:</label>
            <input
              className="form-control"
              type="text"
              value={movie.Star1}
              aria-label="Star 1"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Star 2:</label>
            <input
              className="form-control"
              type="text"
              value={movie.Star2}
              aria-label="Star 2"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Star 3:</label>
            <input
              className="form-control"
              type="text"
              value={movie.Star3}
              aria-label="Star 3"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Star 4:</label>
            <input
              className="form-control"
              type="text"
              value={movie.Star4}
              aria-label="Star 4"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>No of Votes:</label>
            <input
              className="form-control"
              type="text"
              value={movie.No_of_Votes}
              aria-label="No of Votes"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Gross:</label>
            <input
              className="form-control"
              type="text"
              value={`${movie.Gross}`}
              aria-label="Gross"
              readOnly
            />
            <button type="button" class="btn btn-outline-success">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMovies;
