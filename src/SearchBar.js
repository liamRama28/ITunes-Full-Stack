import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [selectedMediaType, setSelectedMediaType] = useState('music'); // Initialize with 'music'
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    console.log('handleSearch called'); // Add this line
    console.log('query:', query);
console.log('selectedMediaType:', selectedMediaType);
console.log('results:', results);

    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${query}&media=${selectedMediaType}`
        
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleMediaTypeChange = (e) => {
    setSelectedMediaType(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={selectedMediaType} onChange={handleMediaTypeChange}>
        <option value="music">Music</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="musicVideo">Music Video</option>
        <option value="tvShow">TV Show</option>
        <option value="software">Software</option>
        <option value="ebook">Ebook</option>
        <option value="all">All</option>
      </select>
      <button onClick={handleSearch}>Search</button>
      {/* Display results here */}
    </div>
  );
};

export default SearchBar;
