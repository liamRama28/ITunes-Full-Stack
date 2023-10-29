const request = require('supertest');
const app = require('./server'); // Import your Express app

describe('Search API', () => {
  it('should return a 200 status code', async () => {
    const response = await request(app).get('/api/search?query=example'); // Change 'query' as needed
    expect(response.status).toBe(200);
  });
});
