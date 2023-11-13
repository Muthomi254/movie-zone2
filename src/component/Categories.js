import React, { useState } from 'react';

const Categories = () => {
  const categories = [
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
        {categories.map((category) => (
          <li key={category.id}>
            <a className="dropdown-item" href="#">
              {category}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Categories;
