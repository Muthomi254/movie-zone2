// WatchList.js
import React, { useState, useEffect } from 'react';
import MovieCard from '../component/MovieCard';
import NavBar from '../layout/NavBar';

const WatchList = () => {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then((response) => response.json())
      .then((data) => setWatchList(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  const handleRemoveFromWatchList = (movie) => {
    // Update the Watch_list status on the server
    fetch(`http://localhost:4000/movies/${movie.Series_Title}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Watch_list: false }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming the server returns the updated movie
        setWatchList((prevWatchList) =>
          prevWatchList.map((item) =>
            item.Series_Title === movie.Series_Title
              ? { ...item, Watch_list: false }
              : item
          )
        );
      })
      .catch((error) => console.error('Error updating watch list:', error));
  };

  const filteredWatchList = watchList.filter((movie) => movie.Watch_list);

  return (
    <div>
      <NavBar />
      <div className="container py-5">
        <h3>Watchlist</h3>
        <div className="row row-cols-1 row-cols-md-5">
          {filteredWatchList.map((watchedMovie) => (
            <div key={watchedMovie.Series_Title} className="col mb-4">
              <MovieCard
                movie={watchedMovie}
                onRemoveFromWatchList={handleRemoveFromWatchList}
                isWatchListPage={true} // Pass the isWatchListPage prop
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchList;
