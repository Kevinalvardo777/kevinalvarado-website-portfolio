import { Link } from 'react-router-dom';
import type { NavigationItem } from '@/types';

interface NavigationLinksProps {
  items: NavigationItem[];
}

export default function NavigationLinks({ items }: NavigationLinksProps) {
  return (
    <nav aria-label="Primary navigation" className="nav-links">
      {items.map((item) => (
        <Link key={item.href} to={item.href} className="nav-link">
          {item.label.es}
        </Link>
      ))}
    </nav>
  );
}
