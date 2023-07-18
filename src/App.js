import { useEffect } from 'react';


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
    <div className="App">
      <h1>React 18 Alpha</h1>
    </div>
  );
}

export default App;
