import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import MovieCard from '../component/Card/MovieCard';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const isHomePage = true;

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const response = await fetch('http://localhost:4000/movies');
        if (response.ok) {
          const data = await response.json();
          setMovies(data);
        }
      } catch (err) {
        console.error('ERROR ON MOUNT::', err);
      }
    };

    fetchAllMovies();
  }, []);

  return (
    <Layout>
      <div className="row mt-3 mb-3">
        <h2 className="text-center">All Movies</h2>

        <div className="row">
          {movies.map((movie) => (
            <div className="col-md-3 mb-5" key={movie.id}>
              <MovieCard movie={movie} isHomePage={isHomePage} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
