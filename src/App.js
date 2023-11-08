// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import EditMovies from './pages/EditMovies';
import NoPages from './pages/NoPages';
import WatchList from './pages/WatchList';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/editmovies" element={<EditMovies />} />
        <Route path="*" element={<NoPages />} />
      </Routes>
    </BrowserRouter>
  );
}
