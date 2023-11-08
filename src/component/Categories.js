import React, { useState } from 'react';

const Categories = ({ onSelectCategory }) => {
  const categories = ['All', 'Action', 'Adventure', 'Drama', 'Crime', 'Biography', 'Western', 'Comedy', 'Animation', 'Horror', 'Mystery', 'Sci-fi' ];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="container">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="categoriesDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <p className="text-light col-md-6 d-flex-row">Genres :</p>

        {selectedCategory}
      </button>
      <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`dropdown-item ${
                category === selectedCategory
                  ? 'active'
                  : ' UNVAILABLE at the momment'
              }`}
              onClick={() => handleCategorySelect(category)}
              disabled={category === selectedCategory}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
