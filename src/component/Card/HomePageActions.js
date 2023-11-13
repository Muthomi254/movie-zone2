import React from 'react';

export default function HomePageActions({ movie, handleViewDescription }) {
  const handleWatchLater = async (movie) => {
    console.log(movie);
    try {
      const response = await fetch(`http://localhost:4000/movies/${movie.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ watch_list: true }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success', data);
      }
    } catch (error) {
      console.error('Error while adding to watchlist', error);
    }
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
        {movie.watch_list ? (
          'Added to watchList'
        ) : (
          <button
            className="btn btn-outline-primary"
            onClick={() => handleWatchLater(movie)}
          >
            Watch later
          </button>
        )}
      </div>
    </div>
  );
}
