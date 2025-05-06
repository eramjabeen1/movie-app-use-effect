import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  const apikey = "9605ad9e";
  const [movieSearch, setMovieSearch] = useState("Clueless");
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apikey}&t=${movieSearch}`
    );
    const data = await response.json();
    console.log("Fetched movie:", data); 
    setMovie(data);

  };
  

  useEffect(() => {
    getMovie();
  }, [movieSearch]);

  return (
    <div className="App">
      <h1>🎬 Movie Search App</h1>
      <Form movieSearch={movieSearch} setMovieSearch={setMovieSearch} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
