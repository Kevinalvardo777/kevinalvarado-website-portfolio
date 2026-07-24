import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: { es: 'Frontend principal', en: 'Core frontend' },
    items: ['TypeScript', 'JavaScript', 'React', 'Angular', 'Vue.js', 'HTML5', 'CSS3', 'Sass', 'Responsive Design'],
  },
  {
    title: { es: 'Angular moderno', en: 'Modern Angular' },
    items: ['Standalone Components', 'Signals', 'RxJS', 'SSR', 'Lazy loading', 'Testing'],
  },
  {
    title: { es: 'React', en: 'React' },
    items: ['Hooks', 'Zustand', 'React Router', 'Testing Library', 'Atomic Design'],
  },
  {
    title: { es: 'Arquitectura frontend', en: 'Frontend architecture' },
    items: ['Design Systems', 'Microfrontends', 'Webviews', 'SPA', 'Clean Code', 'SOLID'],
  },
  {
    title: { es: 'Calidad y testing', en: 'Quality and testing' },
    items: ['Jest', 'RTL', 'ESLint', 'Prettier', 'Code review', 'Pull requests'],
  },
  {
    title: { es: 'Accesibilidad, SEO y analítica', en: 'Accessibility, SEO and analytics' },
    items: ['WCAG', 'SEO técnico', 'Open Graph', 'Google Tag Manager', 'Microsoft Clarity'],
  },
  {
    title: { es: 'Integraciones empresariales', en: 'Enterprise integrations' },
    items: ['Salesforce', 'Marketing Cloud', 'Zendesk', 'Design systems institucionales'],
  },
  {
    title: { es: 'Backend', en: 'Backend' },
    items: ['Node.js', 'Express', 'Java', 'Spring', 'Laravel', 'Django', 'APIs REST'],
  },
  {
    title: { es: 'Bases de datos', en: 'Databases' },
    items: ['PostgreSQL', 'MySQL', 'Oracle', 'PL/SQL', 'Redis'],
  },
  {
    title: { es: 'DevOps y herramientas', en: 'DevOps and tools' },
    items: ['Git', 'GitHub', 'Azure', 'CI/CD', 'npm', 'Linux', 'VS Code'],
  },
  {
    title: { es: 'Inteligencia artificial', en: 'Artificial intelligence' },
    items: ['Asistentes de programación', 'Prompt engineering', 'Refactorización', 'Documentación'],
  },
];
