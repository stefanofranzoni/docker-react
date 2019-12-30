import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders text link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Vita! Vita!/i);
  expect(linkElement).toBeInTheDocument();
});
