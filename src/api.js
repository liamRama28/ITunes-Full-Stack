import axios from 'axios';

const backendUrl = 'http://localhost:3001'; // Update with your actual backend URL

export const searchItunes = (query) => {
  // Make a GET request to your backend's search endpoint
  return axios.get(`${backendUrl}/api/search?q=${query}`);
};

export const addToFavorites = (item) => {
  // Make a POST request to your backend's add-to-favorites endpoint
  return axios.post(`${backendUrl}/api/favorites`, item);
};
