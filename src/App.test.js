import { render, screen } from '@testing-library/react';
import _App from './_App';

test('renders learn react link', () => {
  render(<_App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
