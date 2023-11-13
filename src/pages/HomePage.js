// import React, { useState, useEffect } from 'react';
// import Layout from '../layout/Layout';
// import MovieCard from '../component/Card/MovieCard';
// import Categories from '../component/Categories';

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);
//   const [selectedGenre, setSelectedGenre] = useState(null);
//   const isHomePage = true;

//   useEffect(() => {
//     const fetchAllMovies = async () => {
//       try {
//         const response = await fetch(
//           'https://movie-zone2-react.onrender.com/api/movies'
//         );
//         if (response.ok) {
//           const data = await response.json();
//           setMovies(data);
//         }
//       } catch (err) {
//         console.error('ERROR ON MOUNT::', err);
//       }
//     };

//     fetchAllMovies();
//   }, []);

//   const handleGenreClick = (genre) => {
//     setSelectedGenre(genre);
//   };

//   const filteredMovies = selectedGenre
//     ? movies.filter((movie) => movie.genres.includes(selectedGenre))
//     : movies;

//   return (
//     <Layout>
//       <div className="row mt-3 mb-3">
//         <h2 className="text-center">All Movies</h2>

//         <div className="row">
//           <Categories onGenreClick={handleGenreClick} />
//           {filteredMovies.map((movie) => (
//             <div className="col-md-3 mb-5" key={movie.id}>
//               <MovieCard movie={movie} isHomePage={isHomePage} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from 'react';
import MovieCard from '../component/Card/MovieCard';
import Layout from '../layout/Layout';

const HomePage = ({ selectedGenre }) => {
  const [movies, setMovies] = useState([]);
  const isHomePage = true;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://movie-zone2-react.onrender.com/api/movies?genre=${selectedGenre}`
        );

        if (response.ok) {
          const data = await response.json();
          setMovies(data);
        }
      } catch (err) {
        console.error('Error fetching movies:', err);
      }
    };

    fetchMovies();
  }, [selectedGenre]);

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

