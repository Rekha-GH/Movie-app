import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components.js/MovieList';
import MovieListHeading from './Components.js/MovieListHeading';
import SearchBox from './Components.js/SearchBox';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMyMovie = async () => {
    const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.search) {
      setMovies(responseJson.search);
    }

  };

  // We've added a function that calls the API. This uses the Fetch API
  // If we get any movies back in the search, we're going to set this to our movie state

  // We're using a useEffect to make sure the API call only happens when the app loads for the first time  
  useEffect(() => {
    getMyMovie();
  }, []);

  // We're rendering the MovieList and passing the movies we stored in state as props
  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};


export default App;
