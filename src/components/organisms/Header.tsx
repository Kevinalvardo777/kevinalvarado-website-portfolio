import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '@/components/atoms/ThemeToggle';
import LanguageToggle from '@/components/atoms/LanguageToggle';
import { navigationItems } from '@/data/navigation';
import { useUiStore } from '@/store/uiStore';
import { getLocalizedValue } from '@/utils/locale';

export default function Header() {
  const [open, setOpen] = useState(false);
  const language = useUiStore((state) => state.language);

  return (
    <header className="site-header" role="banner">
      <div className="container header-shell">
        <Link to="/" className="brand-link">
          <span className="brand-mark">KA</span>
          <span className="brand-text">Kevin Alvarado</span>
        </Link>
        <div className="header-actions">
          <ThemeToggle />
          <LanguageToggle />
          <button type="button" className="mobile-toggle" aria-expanded={open} aria-label="Open menu" onClick={() => setOpen((value) => !value)}>
            {open ? <X size={18} /> : <Menu size={18} />}
            <span>{language === 'en' ? 'Menu' : 'Menú'}</span>
          </button>
        </div>
      </div>
      {open ? (
        <div className="mobile-nav" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button type="button" className="mobile-nav__backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />
          <nav className="mobile-nav__panel" aria-label="Primary navigation">
            <div className="mobile-nav__heading">
              <span>{language === 'en' ? 'Navigation' : 'Menú'}</span>
              <button type="button" className="icon-button" aria-label="Close menu" onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link" onClick={() => setOpen(false)}>
                {getLocalizedValue(item.label, language)}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
