import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from './SearchResults';

test('renders SearchResults component', () => {
  const { getByText } = render(
    <SearchResults results={[]} addToFavorites={() => {}} />
  );

  const headingElement = getByText('Search Results');
  expect(headingElement).toBeInTheDocument();
});
