import type { LocalizedText } from '@/types';

export const getLocalizedValue = (value: LocalizedText | string, language: 'es' | 'en') => {
  if (typeof value === 'string') return value;
  return language === 'en' ? value.en : value.es;
};
