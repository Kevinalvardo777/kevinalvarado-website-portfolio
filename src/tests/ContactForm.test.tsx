import { render, screen } from '@testing-library/react';
import ContactSection from '@/components/organisms/ContactSection';

describe('ContactSection', () => {
  it('renders a contact form', () => {
    render(<ContactSection />);
    expect(screen.getByRole('heading', { name: /contacto/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
  });
});
