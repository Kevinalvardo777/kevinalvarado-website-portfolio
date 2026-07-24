import { create } from 'zustand';

interface UiState {
  theme: 'light' | 'dark';
  language: 'es' | 'en';
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: 'es' | 'en') => void;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

const initialTheme = (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') as 'light' | 'dark';
const initialLanguage = (typeof window !== 'undefined' && window.localStorage.getItem('preferred-language') === 'en' ? 'en' : 'es') as 'es' | 'en';

export const useUiStore = create<UiState>((set) => ({
  theme: initialTheme,
  language: initialLanguage,
  setTheme: (theme) => {
    set({ theme });
    document.documentElement.dataset.theme = theme;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('preferred-theme', theme);
    }
  },
  setLanguage: (language) => {
    set({ language });
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('preferred-language', language);
    }
  },
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  toggleLanguage: () => set((state) => ({ language: state.language === 'es' ? 'en' : 'es' })),
}));
