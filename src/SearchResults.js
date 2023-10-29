//SearchResults.js
import React from 'react';


const SearchResults = ({ results, addToFavorites }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((result) => (
          <div key={result.trackId}>
            <li>
              <strong>{result.trackName}</strong> - {result.artistName}
            </li>
            <button onClick={() => addToFavorites(result)}>Add to Favorites</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
