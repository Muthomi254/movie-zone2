import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../component/Search';
import Categories from '../component/Categories';

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Movie<span className='text-warning fw-bolder'>Zone</span>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
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
              <Categories />
            </li>
            <li className="nav-item">
              <Search />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
