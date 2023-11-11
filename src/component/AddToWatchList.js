// AddToWatchList.js
import React, { useState } from 'react';

const AddToWatchList = ({ movie, onAddToWatchList }) => {
  const [isWatchLater, setIsWatchLater] = useState(false);

  const handleAddToWatchList = () => {
    setIsWatchLater(true);
    onAddToWatchList(movie);
  };

  return (
    <button
      type="button"
      className={`btn btn-outline-primary mx-2 ${
        isWatchLater ? 'disabled' : ''
      }`}
      onClick={handleAddToWatchList}
    >
      {isWatchLater ? 'Added to Watchlist' : 'Watch Later'}
    </button>
  );
};

export default AddToWatchList;
