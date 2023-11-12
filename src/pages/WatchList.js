import React, { useState, useEffect } from 'react';
import MovieCard from '../component/Card/MovieCard';
import Layout from '../layout/Layout';

const WatchList =() => {
  const [watchList, setWatchList] = useState([]);
  useEffect(() => {
    const fetchWatchMovies = async () => {
      try {
        const response = await fetch('http://localhost:4000/movies');
        if (response.ok) {
          const data = await response.json();
          setWatchList(data);
          console.log("hey", data)
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchWatchMovies();
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
          prevWatchList.filter(
            (item) => item.Series_Title !== movie.Series_Title
          )
        );
      })
      .catch((error) => console.error('Error updating watch list:', error));
  };

  const filteredWatchList = watchList.filter(
    (movie) => {
      // console.log(movie)
      return movie.watch_list === true
    }
  );
  console.log('Filtered', filteredWatchList);

  return (
    <Layout>
      <div className="contaiiner ">
        {filteredWatchList.map((watchedMovie) => (
          <div key={watchedMovie.Series_Title} className="row ">
            <div className="col-md-3">
              <MovieCard
                movie={watchedMovie}
                onRemoveFromWatchList={handleRemoveFromWatchList}
                isWatchListPage={true} // Pass the isWatchListPage prop
              />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default WatchList;
