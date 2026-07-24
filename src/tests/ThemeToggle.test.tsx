import { render, screen } from '@testing-library/react';
import ThemeToggle from '@/components/atoms/ThemeToggle';

describe('ThemeToggle', () => {
  it('renders an accessible toggle button', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button', { name: /theme/i })).toBeInTheDocument();
  });
});
