import { Code2, Component, Gauge, ShieldCheck } from 'lucide-react';
import SkillGroup from '@/components/molecules/SkillGroup';
import { skillCategories } from '@/data/skills';
import { useUiStore } from '@/store/uiStore';

const capabilities = [
  {
    icon: Component,
    title: { es: 'Interfaces y design systems', en: 'Interfaces and design systems' },
    text: { es: 'Componentes reutilizables, tokens, accesibilidad y consistencia visual para productos que crecen.', en: 'Reusable components, tokens, accessibility and visual consistency for products that scale.' },
  },
  {
    icon: Code2,
    title: { es: 'Aplicaciones React / Angular', en: 'React / Angular applications' },
    text: { es: 'SPAs, webviews, microfrontends e integraciones con APIs para entornos empresariales.', en: 'SPAs, webviews, microfrontends and API integrations for enterprise environments.' },
  },
  {
    icon: ShieldCheck,
    title: { es: 'Frontend para banca', en: 'Frontend for banking' },
    text: { es: 'Experiencias seguras, responsivas y mantenibles dentro de plataformas reguladas.', en: 'Secure, responsive and maintainable experiences inside regulated platforms.' },
  },
  {
    icon: Gauge,
    title: { es: 'Calidad y entrega', en: 'Quality and delivery' },
    text: { es: 'Testing, rendimiento, revisión de código, documentación y acompañamiento técnico.', en: 'Testing, performance, code review, documentation and technical guidance.' },
  },
];

export default function ExpertiseSection() {
  const language = useUiStore((state) => state.language);

  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="section-kicker">{language === 'en' ? 'Capabilities' : 'Capacidades'}</span>
        <h2>{language === 'en' ? 'What I build' : 'Qué construyo'}</h2>
        <p className="section-lead">
          {language === 'en'
            ? 'A frontend practice focused on product quality, scalable architecture and interfaces that teams can maintain.'
            : 'Una práctica frontend enfocada en calidad de producto, arquitectura escalable e interfaces que los equipos pueden mantener.'}
        </p>
        <div className="capabilities-grid">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title.es} className="capability-card">
                <Icon size={22} />
                <h3>{capability.title[language]}</h3>
                <p>{capability.text[language]}</p>
              </article>
            );
          })}
        </div>
        <div className="skills-grid skills-grid--compact">
          {skillCategories.slice(0, 6).map((category) => (
            <SkillGroup key={category.title.es} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
