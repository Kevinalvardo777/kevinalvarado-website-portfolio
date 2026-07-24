import type { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'strong';
  className?: string;
}

export default function Typography({ children, as: Component = 'p', className = '' }: TypographyProps) {
  return <Component className={className}>{children}</Component>;
}
