import { useEffect } from 'react';
import Providers from '@/app/providers/Providers';
import { useUiStore } from '@/store/uiStore';

export default function App() {
  const theme = useUiStore((state) => state.theme);
  const language = useUiStore((state) => state.language);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = language;
  }, [theme, language]);

  return <Providers />;
}
