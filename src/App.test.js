import { render, screen } from '@testing-library/react';
import App from './App';

test('renders iTunes Search title', () => {
  render(<App />);
  const titleElement = screen.getByText('iTunes Search');
  expect(titleElement).toBeInTheDocument();
});
