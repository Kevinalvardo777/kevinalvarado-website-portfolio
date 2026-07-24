import { Github } from 'lucide-react';
import ProjectCard from '@/components/organisms/ProjectCard';
import Button from '@/components/atoms/Button';
import { profile } from '@/data/profile';
import type { Project } from '@/types';
import { useUiStore } from '@/store/uiStore';

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const language = useUiStore((state) => state.language);
  const featured = projects.slice(0, 6);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">{language === 'en' ? 'Selected work' : 'Trabajo seleccionado'}</span>
            <h2>{language === 'en' ? 'Featured web projects' : 'Proyectos web destacados'}</h2>
            <p className="section-lead">
              {language === 'en'
                ? 'Product interfaces, component systems and web experiences built with frontend architecture in mind.'
                : 'Interfaces de producto, sistemas de componentes y experiencias web construidas con arquitectura frontend.'}
            </p>
          </div>
          <Button variant="secondary" asChild>
            <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer">
              <Github size={17} />
              {language === 'en' ? 'View repositories' : 'Ver repositorios'}
            </a>
          </Button>
        </div>
        <div className="projects-grid">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
