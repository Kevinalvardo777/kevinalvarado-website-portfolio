import type { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function SectionTitle({ title, subtitle, children }: SectionTitleProps) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
      {children}
    </div>
  );
}
