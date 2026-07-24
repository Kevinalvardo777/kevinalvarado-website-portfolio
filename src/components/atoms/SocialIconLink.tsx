import type { ReactNode } from 'react';

interface SocialIconLinkProps {
  href: string;
  children: ReactNode;
  label: string;
}

export default function SocialIconLink({ href, children, label }: SocialIconLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-link">
      {children}
    </a>
  );
}
