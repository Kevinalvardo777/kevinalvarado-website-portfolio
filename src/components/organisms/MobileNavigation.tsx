import { Link } from 'react-router-dom';
import { navigationItems } from '@/data/navigation';
import { getLocalizedValue } from '@/utils/locale';
import { useUiStore } from '@/store/uiStore';

interface MobileNavigationProps {
  open: boolean;
}

export default function MobileNavigation({ open }: MobileNavigationProps) {
  const language = useUiStore((state) => state.language);

  if (!open) return null;

  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {navigationItems.map((item) => (
        <Link key={item.href} to={item.href} className="nav-link">
          {getLocalizedValue(item.label, language)}
        </Link>
      ))}
    </nav>
  );
}
