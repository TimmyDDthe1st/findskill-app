import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders Skill App h1', () => {
  const { getByText } = render(<App />);
  const h1Text = getByText(/Skill App/i);
  expect(h1Text).toBeInTheDocument();
});
