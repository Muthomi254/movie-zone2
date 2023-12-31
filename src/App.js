// Ensure proper imports
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './layout/Layout';
import EditMovies from './pages/EditMovies';
import NoPages from './pages/NoPages';
import WatchList from './pages/WatchList';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/editmovies" element={<EditMovies />} />
        <Route path="*" element={<NoPages />} />
      </Routes>
    </BrowserRouter>
  );
}



