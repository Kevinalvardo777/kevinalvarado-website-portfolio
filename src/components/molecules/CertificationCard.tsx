import type { Certification } from '@/types';

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <article className="certification-card">
      <h3>{certification.title.es}</h3>
      <p>{certification.issuer}</p>
      <span>{certification.year}</span>
    </article>
  );
}
