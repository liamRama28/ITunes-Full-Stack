import React from 'react';
// Import the API functions you created in api.js
import { searchItunes, addToFavorites } from './api';

const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <div key={favorite.trackId}>
            <li>
              <strong>{favorite.trackName}</strong> - {favorite.artistName}
            </li>
            <button onClick={() => removeFromFavorites(favorite)}>Remove from Favorites</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
