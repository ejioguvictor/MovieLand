import { useEffect } from 'react';

import './App.css'
import SearchIcon from './search.svg'


//40e19a4e - OMDB API Key

const API_URL = "http://www.omdbapi.com?apikey=40e19a4e";
const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    console.log(data);
  }

  useEffect(() => {
    searchMovies('Matrix')
    searchMovies('Spiderman')
  }, [])

  return (
    <div className="app">
      <h1>MovieLand 🌏</h1>

      <div className='search'>
        <input type="text" placeholder="Search for movies" />
      </div>
    </div>
  );
}

export default App;
