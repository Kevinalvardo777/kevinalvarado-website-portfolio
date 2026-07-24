import { render, screen } from '@testing-library/react';
import Button from '@/components/atoms/Button';

describe('Button', () => {
  it('renders children and a button role', () => {
    render(<Button>Ver experiencia</Button>);
    expect(screen.getByRole('button', { name: /ver experiencia/i })).toBeInTheDocument();
  });
});
