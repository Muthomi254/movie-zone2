import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import MovieCard from '../component/Card/MovieCard';
import Categories from '../component/Categories';

const WatchList = () => {
  const [filteredWatchList, setFilteredWatchList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const isWatchListPage = true;

  useEffect(() => {
    const fetchWatchMovies = async () => {
      try {
        const response = await fetch(
          'https://movie-zone2-react.onrender.com/api/movies'
        );
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

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredWatchListMovies = selectedGenre
    ? filteredWatchList.filter((movie) => movie.genres.includes(selectedGenre))
    : filteredWatchList;

  const handleRemoveFromWatchList = async (movieId) => {
    // ... (previous code)
  };

  return (
    <Layout>
      <div className="row mt-3 mb-3">
        <h2 className="text-center">Watch List</h2>
        <div className="row">
          <Categories onGenreClick={handleGenreClick} />
          {filteredWatchListMovies.map((movie) => (
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
