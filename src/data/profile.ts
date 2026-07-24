import type { Profile, SocialLink } from '@/types';

export const profile: Profile = {
  name: 'Kevin Alvarado Cornejo',
  title: {
    es: 'Senior Frontend Developer | Frontend Technical Lead',
    en: 'Senior Frontend Developer | Frontend Technical Lead',
  },
  headline: {
    es: 'Desarrollador Frontend Senior especializado en aplicaciones empresariales escalables, arquitectura frontend y experiencias digitales para banca.',
    en: 'Senior Frontend Developer focused on scalable enterprise applications, frontend architecture and digital banking experiences.',
  },
  description: {
    es: 'Ingeniero en Ciencias Computacionales con ocho años de experiencia construyendo productos digitales y soluciones empresariales para banca y entornos corporativos.',
    en: 'Computer Science Engineer with eight years of experience building digital products and enterprise solutions for banking and corporate environments.',
  },
  location: {
    es: 'Guayaquil, Ecuador',
    en: 'Guayaquil, Ecuador',
  },
  availability: {
    es: 'Disponible para oportunidades remotas y proyectos internacionales',
    en: 'Available for remote opportunities and international projects',
  },
  email: 'kevin.alvarado.cornejo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kevin-franklin-alvarado-cornejo-391747177/',
  github: 'https://github.com/Kevinalvardo777',
  cvUrl: '/cv/kevin-alvarado-frontend-developer.pdf',
};

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { label: 'GitHub', href: profile.github, icon: 'github' },
];
