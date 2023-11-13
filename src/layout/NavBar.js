// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Search from '../component/Search';
// import Categories from '../component/Categories';

// export default function NavBar({ onGenreClick }) {
//   const [selectedGenre, setSelectedGenre] = useState(null);

//   const handleGenreClick = (genre) => {
//     setSelectedGenre(genre);
//     onGenreClick(genre);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           Movie<span className="text-warning fw-bolder">Zone</span>
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/watchlist">
//                 Watch List
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/editmovies">
//                 Admin
//               </Link>
//             </li>
//           </ul>

//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Categories onGenreClick={handleGenreClick} />
//             </li>
//             <li className="nav-item">
//               <Search />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../component/Search';
import Categories from '../component/Categories';

const NavBar = ({ onGenreSelect }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    onGenreSelect(genre); // Pass the selected genre to the parent component
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie<span className="text-warning fw-bolder">Zone</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/watchlist">
                Watch List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/editmovies">
                Admin
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Categories onSelectGenre={handleGenreClick} />
            </li>
            <li className="nav-item">
              <Search />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
