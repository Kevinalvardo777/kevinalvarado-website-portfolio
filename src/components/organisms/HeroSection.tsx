import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import Button from '@/components/atoms/Button';
import Badge from '@/components/atoms/Badge';
import { profile } from '@/data/profile';
import { useUiStore } from '@/store/uiStore';

export default function HeroSection() {
  const language = useUiStore((state) => state.language);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-shell">
        <div className="hero-content">
          <Badge>{language === 'en' ? 'Independent frontend practice' : 'Frontend practice independiente'}</Badge>
          <h1>{language === 'en' ? 'Web experiences that feel built, not assembled.' : 'Experiencias web diseñadas, no ensambladas.'}</h1>
          <p className="hero-title">{language === 'en' ? 'Senior Frontend Developer / Technical Lead' : 'Senior Frontend Developer / Technical Lead'}</p>
          <p className="hero-headline">
            {language === 'en'
              ? 'I design and build modern web interfaces, design systems and frontend platforms for teams that need quality, speed and maintainability.'
              : 'Diseño y construyo interfaces web modernas, design systems y plataformas frontend para equipos que necesitan calidad, velocidad y mantenibilidad.'}
          </p>
          <div className="hero-actions">
            <Button asChild><a href="#projects">{language === 'en' ? 'See the work' : 'Ver proyectos'}<ArrowUpRight size={16} /></a></Button>
            <Button variant="secondary" asChild><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></Button>
            <Button variant="secondary" asChild><a href="#contact">{language === 'en' ? 'Contact' : 'Contacto'}</a></Button>
          </div>
          <div className="hero-socials">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="browser-frame">
            <div className="browser-frame__bar">
              <span />
              <span />
              <span />
            </div>
            <div className="browser-frame__content">
              <div className="browser-frame__hero" />
              <div className="browser-frame__grid">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="hero-proof">
            <span>React / Angular / TypeScript</span>
            <strong>{language === 'en' ? 'Frontend systems for real products' : 'Sistemas frontend para productos reales'}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
