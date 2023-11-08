// MovieNavbar.js
import React, { useState } from 'react';
import Categories from '../component/Categories';
import { Link } from 'react-router-dom';

const MovieNavbar = ({ onSelectCategory, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bolder" to="/">
          <span className="text-light">Movie </span>
          <span className="text-warning">Zone</span>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-light" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/watchlist">
                Watch List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/editmovies">
                Edit Movies
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Categories onSelectCategory={onSelectCategory} />
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-muted" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default MovieNavbar;
