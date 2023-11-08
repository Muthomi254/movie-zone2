import React, { useState } from 'react';
import './App.css';
import NavBar from './component/NavBar';
import MovieDisplay from './component/MovieDisplay';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <NavBar onSelectCategory={handleCategorySelect} onSearch={handleSearch} />
      <MovieDisplay
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
