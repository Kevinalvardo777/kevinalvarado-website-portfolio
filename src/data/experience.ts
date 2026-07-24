import type { ExperienceItem } from '@/types';

export const experiences: ExperienceItem[] = [
  {
    company: 'NTT DATA',
    period: { es: 'Marzo de 2022 – Actualidad', en: 'March 2022 – Present' },
    role: { es: 'Senior Frontend Developer / Frontend Technical Lead', en: 'Senior Frontend Developer / Frontend Technical Lead' },
    client: { es: 'Banco Pichincha', en: 'Banco Pichincha' },
    description: {
      es: 'Desarrollo de aplicaciones frontend empresariales para banca digital con Angular, React y TypeScript, incluyendo microfrontends, webviews, SPA y design systems.',
      en: 'Development of enterprise frontend applications for digital banking with Angular, React and TypeScript, including microfrontends, webviews, SPAs and design systems.',
    },
    highlights: [
      { es: 'Arquitectura frontend, integración con APIs y manejo de autenticación y estados.', en: 'Frontend architecture, API integration and authentication/state management.' },
      { es: 'Pruebas, accesibilidad, SEO técnico, analítica y coordinación con equipos multidisciplinarios.', en: 'Testing, accessibility, technical SEO, analytics and coordination with multidisciplinary teams.' },
      { es: 'Liderazgo técnico, revisión de pull requests, acompañamiento a desarrolladores y resolución de incidentes.', en: 'Technical leadership, pull request reviews, developer mentoring and incident resolution.' },
    ],
    featured: true,
  },
  {
    company: 'Corporación El Rosado / Gacela Delivery',
    period: { es: 'Marzo de 2020 – Mayo de 2022', en: 'March 2020 – May 2022' },
    role: { es: 'Full Stack Developer', en: 'Full Stack Developer' },
    description: {
      es: 'Plataforma e-commerce con Vue.js y Laravel.',
      en: 'E-commerce platform with Vue.js and Laravel.',
    },
    highlights: [
      { es: 'Desarrollo de frontend y backend, integración de servicios y bases de datos.', en: 'Frontend and backend development, service integration and databases.' },
    ],
  },
  {
    company: 'Semgroup / Duodata',
    period: { es: 'Septiembre de 2019 – 2022', en: 'September 2019 – 2022' },
    role: { es: 'Web Developer', en: 'Web Developer' },
    description: {
      es: 'Sistemas web con React y Django para el terminal terrestre.',
      en: 'Web systems with React and Django for the land terminal.',
    },
    highlights: [
      { es: 'Consumo de servicios mediante Django REST Framework.', en: 'Service consumption through Django REST Framework.' },
    ],
  },
  {
    company: 'G2C Integrators',
    period: { es: 'Noviembre de 2019', en: 'November 2019' },
    role: { es: 'Java Web Developer', en: 'Java Web Developer' },
    description: {
      es: 'Desarrollo de módulos ERP con Java, Spring, Hibernate y JSF.',
      en: 'ERP modules with Java, Spring, Hibernate and JSF.',
    },
    highlights: [
      { es: 'Uso de Oracle, PL/SQL, WildFly y JasperReports.', en: 'Oracle, PL/SQL, WildFly and JasperReports usage.' },
    ],
  },
  {
    company: 'Huawei',
    period: { es: 'Mayo de 2019 – Septiembre de 2019', en: 'May 2019 – September 2019' },
    role: { es: 'Software Tester', en: 'Software Tester' },
    description: {
      es: 'Pruebas funcionales para un CRM de telecomunicaciones.',
      en: 'Functional testing for a telecommunications CRM.',
    },
    highlights: [
      { es: 'Validación de servicios, bases de datos y comunicación en inglés con equipos internacionales.', en: 'Service validation, databases and English communication with international teams.' },
    ],
  },
  {
    company: 'Innovasystem',
    period: { es: 'Mayo de 2018 – Enero de 2019', en: 'May 2018 – January 2019' },
    role: { es: 'Software Development Intern', en: 'Software Development Intern' },
    description: {
      es: 'Juego orientado al marketing empresarial.',
      en: 'Game oriented to corporate marketing.',
    },
    highlights: [
      { es: 'Phaser.js y Laravel para el prototipo interactivo.', en: 'Phaser.js and Laravel for the interactive prototype.' },
    ],
  },
];
