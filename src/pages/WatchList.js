import React, { useState, useEffect } from 'react';
import MovieCard from '../component/Card/MovieCard';
import Layout from '../layout/Layout';

const WatchList = () => {
  const [filteredWatchList, setFilteredWatchList] = useState([]);

  const isWatchListPage = true;
  useEffect(() => {
    const fetchWatchMovies = async () => {
      try {
        const response = await fetch('http://localhost:4000/movies');
        if (response.ok) {
          const data = await response.json();
          const filtered = data.filter((movie) => movie.watch_list === true);

          setFilteredWatchList(filtered);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchWatchMovies();
  }, []);

  const handleRemoveFromWatchList = async (movieId) => {
    try {
      const response = fetch(`http://localhost:4000/movies/${movieId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ watch_list: false }),
      });

      if(response.ok){
        const data = await response.json();
        console.log('Success remove',data)
      }
    } catch (errors) {
      console.error(`Unable to remove movie of ID${movieId} from watch list`);
    }
  };

  return (
    <Layout>
      <div className="row mt-3 mb-3">
        <h2 className="text-center">Watch List</h2>
        <div className="row">
          {filteredWatchList.map((movie) => (
            <div key={movie.id} className="col-md-3 mb-5">
              <MovieCard
                movie={movie}
                isWatchListPage={isWatchListPage}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WatchList;
