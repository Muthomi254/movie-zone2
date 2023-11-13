import React, { useState } from 'react';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmitSearchTerm = (event) => {
    event.preventDefault();
    console.log(searchTerm);
  };

  return (
    <form className="d-flex" role="search" onSubmit={handleSubmitSearchTerm}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="btn btn-outline-light" type="submit">
        Search
      </button>
    </form>
  );
}
