const DeleteMovies = ({ movie, onDelete }) => {
  const handleDelete = () => {
    fetch(`http://localhost:4000/movies/${movie.Series_Title}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        onDelete(movie.Series_Title); // Assuming the server returns the deleted movie title
      })
      .catch((error) => console.error('Error deleting movie:', error));
  };

  return (
    <div className="py-5">
      {movie && (
        <>
          <h3>Delete Movie</h3>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleDelete}
          >
            Delete "{movie.Series_Title}" Movie
          </button>
        </>
      )}
    </div>
  );
};

export default DeleteMovies;
