export default function Form({ movieSearch, setMovieSearch }) {
    return (
      <form>
        <input
          type="text"
          value={movieSearch}
          onChange={(e) => setMovieSearch(e.target.value)}
          placeholder="Search for a movie..."
        />
      </form>
    );
  }
  