// import React, { useState, useEffect } from 'react';
// import AddMovies from './component/AddMovies';
// import UpdateMovies from './component/UpdateMovies';
// import DeleteMovies from './component/DeleteMovies';

// const EditMovies = () => {
//   const [movies, setMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null);

//   useEffect(() => {
//     // Fetch movies from the server
//     fetch('http://localhost:4000/movies')
//       .then((response) => response.json())
//       .then((data) => setMovies(data))
//       .catch((error) => console.error('Error fetching movies:', error));
//   }, []);

//   const handleAdd = (newMovie) => {
//     setMovies([...movies, newMovie]);
//   };

//   const handleUpdate = (title, updatedMovie) => {
//     setMovies((prevMovies) =>
//       prevMovies.map((movie) =>
//         movie.Series_Title === title ? updatedMovie : movie
//       )
//     );
//     setSelectedMovie(null);
//   };

//   const handleDelete = (title) => {
//     setMovies((prevMovies) =>
//       prevMovies.filter((movie) => movie.Series_Title !== title)
//     );
//     setSelectedMovie(null);
//   };

//   const handleEdit = (movie) => {
//     setSelectedMovie(movie);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6">
//           <AddMovies onAdd={handleAdd} />
//         </div>
//         <div className="col-md-6">
//           {selectedMovie ? (
//             <>
//               <UpdateMovies movie={selectedMovie} onUpdate={handleUpdate} />
//               <DeleteMovies movie={selectedMovie} onDelete={handleDelete} />
//             </>
//           ) : (
//             <p>Select a movie to edit or delete.</p>
//           )}
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-12">
//           <h2>All Movies</h2>
//           <ul>
//             {movies.map((movie) => (
//               <li key={movie.Series_Title} onClick={() => handleEdit(movie)}>
//                 {movie.Series_Title}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditMovies;
