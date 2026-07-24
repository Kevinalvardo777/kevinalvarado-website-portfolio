export interface LocalizedText {
  es: string;
  en: string;
}

export interface LinkItem {
  label: LocalizedText;
  href: string;
  external?: boolean;
}

export interface Profile {
  name: string;
  title: LocalizedText;
  headline: LocalizedText;
  description: LocalizedText;
  location: LocalizedText;
  availability: LocalizedText;
  email: string;
  linkedin: string;
  github: string;
  cvUrl: string;
}

export interface ExperienceItem {
  company: string;
  period: LocalizedText;
  role: LocalizedText;
  client?: LocalizedText;
  description: LocalizedText;
  highlights: LocalizedText[];
  featured?: boolean;
}

export interface Project {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  responsibilities: LocalizedText[];
  architecture: LocalizedText;
  technologies: string[];
  challenges: LocalizedText[];
  learnings: LocalizedText[];
  image: string;
  confidentiality: LocalizedText;
  featured: boolean;
  links: Array<{ label: string; href: string }>;
}

export interface SkillCategory {
  title: LocalizedText;
  items: string[];
}

export interface Certification {
  title: LocalizedText;
  issuer: string;
  year: string;
}

export interface EducationItem {
  degree: LocalizedText;
  institution: string;
  year: string;
}

export interface NavigationItem {
  label: LocalizedText;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}
