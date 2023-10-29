// Favorites.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Favorites from './Favorites';

test('Favorites component matches snapshot', () => {
  // Mock favorites data
  const mockFavorites = [
    { trackId: 1, trackName: 'Favorite 1' },
    { trackId: 2, trackName: 'Favorite 2' },
  ];

  // Render the component and create a snapshot
  const component = renderer.create(<Favorites favorites={mockFavorites} />);
  const tree = component.toJSON();

  // Compare the rendered component to the saved snapshot
  expect(tree).toMatchSnapshot();
});
