import type { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  description?: ReactNode;
}

export default function StatCard({ title, value, description }: StatCardProps) {
  return (
    <article className="stat-card">
      <h3>{title}</h3>
      <strong>{value}</strong>
      {description ? <p>{description}</p> : null}
    </article>
  );
}
