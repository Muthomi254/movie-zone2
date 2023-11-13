import React from 'react';

const Categories = ({ onSelectGenre }) => {
  const genres = [
    'Action',
    'Adventure',
    'Drama',
    'Crime',
    'Biography',
    'Western',
    'Comedy',
    'Animation',
    'Horror',
    'Mystery',
    'Sci-fi',
  ];

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Genres
      </a>
      <ul className="dropdown-menu">
        {genres.map((genre) => (
          <li key={genre}>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => onSelectGenre(genre)}
            >
              {genre}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Categories;
