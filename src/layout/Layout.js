// Layout.js
import React, { useState } from 'react';
// import './Layout.css';
import NavBar from './NavBar';
import MovieDisplay from '../component/MovieDisplay';
import Footer from './Footer';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="Layout">
      <NavBar onSelectCategory={handleCategorySelect} onSearch={handleSearch} />
      <MovieDisplay
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
      />
      <div id="main-container" className=" container mx auto">
        <div>
          <Link to="/editmovies">Edit Movies</Link>
          <Link to="/watchlist">Watch List</Link>
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
