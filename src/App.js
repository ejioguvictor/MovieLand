import { useState, useEffect } from 'react';
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'



const API_URL = "http://www.omdbapi.com?apikey=40e19a4e";

const movie = {
  "Title": "Superman, Spiderman or Batman",
  "Year": "2011",
  "imdbID": "tt2084949",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}
const App = () => {
  const [movies, setMovies] = useState([]) // [] is the initial value
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('Matrix')
    searchMovies('Spiderman')
  }, [])

  return (
    <div className="app">
      <h1>MovieLand 🌏</h1>

      <div className='search'>
        <input
          type="text"
          placeholder="Search for movies"
        // value="Matrix"
        // onChange={(e) => console.log(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search Icon"
        // onClick={() => searchMovies('Matrix')}
        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          ) : (
            <p className='empty'>No movies found</p>
          )
      }

    </div>
  );
}

export default App;
