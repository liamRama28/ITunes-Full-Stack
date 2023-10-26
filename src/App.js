import React, { useState, useEffect } from 'react';
import './App.css';


const apiUrl = 'http://localhost:3001/api'; // Change this to match your backend URL

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMediaType, setSelectedMediaType] = useState('all'); // Initialize with 'all'
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Function to fetch search results
  const fetchSearchResults = async () => {
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${searchTerm}&media=${selectedMediaType}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to add an item to favorites
  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  // Function to handle media type change
  const handleMediaTypeChange = (mediaType) => {
    setSelectedMediaType(mediaType);
  };

  useEffect(() => {
    if (searchTerm) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, selectedMediaType]);

  return (
    <div className="App">
      <h1>iTunes Search</h1>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search iTunes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedMediaType}
          onChange={(e) => handleMediaTypeChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="music">Music</option>
          <option value="movie">Movie</option>
          <option value="podcast">Podcast</option>
          <option value="musicVideo">Music Video</option>
          <option value="tvShow">TV Show</option>
          <option value="software">Software</option>
          <option value="ebook">Ebook</option>
          <option value="audiobook">Audiobook</option>
          <option value="shortFilm">Short Film</option>
        </select>
        <button onClick={fetchSearchResults}>Search</button>
      </div>

      <div className="results">
        {searchResults.map((result) => (
          <div key={result.trackId} className="result">
            <img src={result.artworkUrl100} alt={result.trackName} />
            <h3>{result.trackName}</h3>
            <button onClick={() => addToFavorites(result)}>Add to Favorites</button>
          </div>
        ))}
      </div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.trackId}>{favorite.trackName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
