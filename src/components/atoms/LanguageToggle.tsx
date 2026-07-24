import { useUiStore } from '@/store/uiStore';

export default function LanguageToggle() {
  const language = useUiStore((state) => state.language);
  const setLanguage = useUiStore((state) => state.setLanguage);

  return (
    <button type="button" className="icon-button" aria-label={`language-${language}`} onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}>
      {language === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
