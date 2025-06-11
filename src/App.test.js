import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche le bouton', () => {
  render(<App />);
  const btn = screen.getByTestId('mon-bouton');
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent('Clique-moi');
});
