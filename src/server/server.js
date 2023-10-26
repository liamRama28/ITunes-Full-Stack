const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios'); // Import Axios for making HTTP requests
const helmet = require('helmet'); // Import the helmet middleware

const app = express();
const port = process.env.PORT || 3001; // Define and assign the port

app.use(bodyParser.json());
app.use(cors());
// Use helmet middleware to enhance your app's security
app.use(helmet());

// Route for searching iTunes content
app.get('/api/search', async (req, res) => {
  try {
    const { query } = req.query; // Get the search query from the request query parameters
    console.log('Query:', query); // Log the query to the console
    const response = await axios.get('https://itunes.apple.com/lookup?id=909253', {
      params: {
        term: query,
        media: 'music', // You can change the media type as needed (e.g., music, movie, ebook)
      },
    });
    const searchData = response.data;
    console.log('Response Data:', searchData); // Log the response data to the console
    res.json(searchData);
  } catch (error) {
    console.error('Error searching iTunes:', error);
    res.status(500).json({ error: 'An error occurred while searching iTunes.' });
  }
});


// Array to store user favorites (you can replace this with a database)
const favorites = [];

// Route for managing favorites
app.post('/api/favorites', (req, res) => {
  const { action, item } = req.body;

  if (action === 'add') {
    favorites.push(item);
    res.json({ message: 'Item added to favorites', favorites });
  } else if (action === 'remove') {
    const index = favorites.findIndex((favItem) => favItem.id === item.id);
    if (index !== -1) {
      favorites.splice(index, 1);
      res.json({ message: 'Item removed from favorites', favorites });
    } else {
      res.status(404).json({ error: 'Item not found in favorites' });
    }
  } else {
    res.status(400).json({ error: 'Invalid action' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
