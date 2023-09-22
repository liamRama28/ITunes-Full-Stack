// MyComponent.js

import React, { useState, useEffect } from 'react';
import api from './api'; // Import the Axios instance we created

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Make a GET request to your backend endpoint when the component mounts
    api.get('/your-backend-get-endpoint')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data from the backend:', error);
      });
  }, []);

  const handleSubmit = () => {
    setIsLoading(true);

    // Make a POST request to your backend endpoint
    api.post('/your-backend-post-endpoint', { data: formData })
      .then((response) => {
        // Handle the response, if needed
        console.log('Data sent successfully:', response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error sending data to the backend:', error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h2>Data from Backend:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <h2>Submit Data to Backend:</h2>
      <div>
        <input
          type="text"
          placeholder="Enter data"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        />
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default MyComponent;
