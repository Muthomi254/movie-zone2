// import React, { useState, useEffect } from 'react';
// import MovieCard from '../component/Card/MovieCard';
// import Layout from '../layout/Layout';
// import AddMovie from '../component/AddMovies';
// import Categories from '../component/Categories';

// const EditMovies = () => {
//   const [movies, setMovies] = useState([]);
//   const [showAddMovie, setShowAddMovie] = useState(false);
//   const [selectedGenre, setSelectedGenre] = useState(null);
//   const showDeleteButton = true;
//   const isEditPage = true;

//   const handleDisplayAddMovieComponent = () => {
//     setShowAddMovie(!showAddMovie);
//   };

//   const handleGenreClick = (genre) => {
//     setSelectedGenre(genre);
//   };

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

//   const filteredMovies = selectedGenre
//     ? movies.filter((movie) => movie.genres.includes(selectedGenre))
//     : movies;

//   return (
//     <Layout>
//       <div className="row mt-2">
//         <div className="col-md-4">
//           <button
//             className="btn btn-outline-info"
//             onClick={() => handleDisplayAddMovieComponent()}
//           >
//             Add New Movie
//           </button>
//         </div>
//         <div className="col-md-8">
//           {showAddMovie && <AddMovie />}
//           <Categories onGenreClick={handleGenreClick} />
//         </div>
//       </div>
//       <div className="row">
//         <h3 className="text-center">Available Movies</h3>
//         {filteredMovies.map((movie) => (
//           <div key={movie.id} className="col-md-3">
//             <MovieCard
//               movie={movie}
//               showDeleteButton={showDeleteButton}
//               isEditPage={isEditPage}
//             />
//           </div>
//         ))}
//       </div>
//     </Layout>
//   );
// };

// export default EditMovies;

import React, { useState, useEffect } from 'react';
import MovieCard from '../component/Card/MovieCard';
import Layout from '../layout/Layout';
import AddMovie from '../component/AddMovies';

const EditMovies = ({ selectedGenre }) => {
  const [movies, setMovies] = useState([]);
  const [showAddMovie, setShowAddMovie] = useState(false);
  const showDeleteButton = true;
  const isEditPage = true;

  const handleDisplayAddMovieComponent = () => {
    setShowAddMovie(!showAddMovie);
  };

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
      <div className="row mt-2">
        <div className="col-md-4">
          <button
            className="btn btn-outline-info"
            onClick={handleDisplayAddMovieComponent}
          >
            Add New Movie
          </button>
        </div>
        <div className="col-md-8">{showAddMovie && <AddMovie />}</div>
      </div>
      <div className="row">
        <h3 className="text-center">Available Movies</h3>
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-3">
            <MovieCard
              movie={movie}
              showDeleteButton={showDeleteButton}
              isEditPage={isEditPage}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default EditMovies;
