import type { ReactNode } from 'react';

interface SectionLayoutProps {
  children: ReactNode;
}

export default function SectionLayout({ children }: SectionLayoutProps) {
  return <section className="section">{children}</section>;
}
