import { render, screen } from '@testing-library/react';
import LanguageToggle from '@/components/atoms/LanguageToggle';

describe('LanguageToggle', () => {
  it('renders language options', () => {
    render(<LanguageToggle />);
    expect(screen.getByRole('button', { name: /language/i })).toBeInTheDocument();
  });
});
