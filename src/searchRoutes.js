//searchRoutes.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Define a route to handle search requests
router.get('/search', async (req, res) => {
  try {
    const { term, entity, mediaType } = req.query;

    // Make a request to the iTunes Search API using Axios
    const response = await axios.get(
      `https://itunes.apple.com/search?term=${term}&entity=${entity}&media=${mediaType}`
    );

    const data = response.data;
    res.json(data.results);
  } catch (error) {
    console.error('Error in search route:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;