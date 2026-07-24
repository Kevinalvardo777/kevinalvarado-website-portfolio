import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '@/pages/HomePage';

describe('HomePage', () => {
  it('renders the main hero content', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </HelmetProvider>,
    );
    expect(screen.getByRole('heading', { name: /kevin alvarado cornejo/i })).toBeInTheDocument();
  });
});
