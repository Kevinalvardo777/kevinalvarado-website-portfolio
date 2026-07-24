import { Moon, Sun } from 'lucide-react';
import { useUiStore } from '@/store/uiStore';

export default function ThemeToggle() {
  const theme = useUiStore((state) => state.theme);
  const setTheme = useUiStore((state) => state.setTheme);

  return (
    <button
      type="button"
      className="icon-button"
      aria-label={`theme-${theme}`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
