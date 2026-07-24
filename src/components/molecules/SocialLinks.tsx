import { Github, Linkedin } from 'lucide-react';
import SocialIconLink from '@/components/atoms/SocialIconLink';
import type { SocialLink } from '@/types';

interface SocialLinksProps {
  links: SocialLink[];
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="social-links" aria-label="Social links">
      {links.map((link) => (
        <SocialIconLink key={link.href} href={link.href} label={link.label}>
          {link.icon === 'github' ? <Github size={18} /> : <Linkedin size={18} />}
        </SocialIconLink>
      ))}
    </div>
  );
}
