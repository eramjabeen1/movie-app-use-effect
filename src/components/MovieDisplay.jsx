export default function MovieDisplay({ movie }) {
    if (!movie || movie.Response === "False") {
      return <h2>No movie found.</h2>;
    }
  
    return (
        <div className="movie-card">
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Genre}</p>
          <p>{movie.Year}</p>
        </div>
      );
      
  }
  