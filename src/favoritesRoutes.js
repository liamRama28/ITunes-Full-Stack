const express = require('express');
const router = express.Router();

// Define an array to store favorite items (for simplicity; you can use a database)
const favorites = [];

// Route to add an item to favorites
router.post('/favorites', (req, res) => {
  try {
    const newItem = req.body;
    favorites.push(newItem);
    res.json({ message: 'Item added to favorites', favorites });
  } catch (error) {
    console.error('Error adding item to favorites:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get the list of favorites
router.get('/favorites', (req, res) => {
  try {
    res.json(favorites);
  } catch (error) {
    console.error('Error getting favorites:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
