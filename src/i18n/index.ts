import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      home: 'Inicio',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contacto',
      viewExperience: 'Ver experiencia',
      viewProjects: 'Ver proyectos',
      downloadCv: 'Descargar CV',
      available: 'Disponible para oportunidades remotas y proyectos internacionales',
      location: 'Guayaquil, Ecuador',
      scroll: 'Desplazarse a la siguiente sección',
      experienceTimeline: 'Línea de tiempo profesional',
      projectsTitle: 'Proyectos',
      contactTitle: 'Contacto',
      projectFilter: 'Filtrar proyectos',
      notFound: 'Página no encontrada',
      backHome: 'Volver al inicio',
      formName: 'Nombre',
      formEmail: 'Correo',
      formCompany: 'Empresa',
      formSubject: 'Asunto',
      formMessage: 'Mensaje',
      send: 'Enviar',
      copyEmail: 'Copiar correo',
    },
  },
  en: {
    translation: {
      home: 'Home',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      viewExperience: 'View experience',
      viewProjects: 'View projects',
      downloadCv: 'Download CV',
      available: 'Available for remote opportunities and international projects',
      location: 'Guayaquil, Ecuador',
      scroll: 'Scroll to the next section',
      experienceTimeline: 'Professional timeline',
      projectsTitle: 'Projects',
      contactTitle: 'Contact',
      projectFilter: 'Filter projects',
      notFound: 'Page not found',
      backHome: 'Back home',
      formName: 'Name',
      formEmail: 'Email',
      formCompany: 'Company',
      formSubject: 'Subject',
      formMessage: 'Message',
      send: 'Send',
      copyEmail: 'Copy email',
    },
  },
};

const savedLanguage = typeof window !== 'undefined' ? window.localStorage.getItem('preferred-language') : 'es';

void i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage ?? 'es',
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
});

export default i18n;
