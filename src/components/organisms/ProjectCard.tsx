import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import ProjectTechnologyList from '@/components/molecules/ProjectTechnologyList';
import type { Project } from '@/types';
import { useUiStore } from '@/store/uiStore';
import { getLocalizedValue } from '@/utils/locale';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const language = useUiStore((state) => state.language);
  const hasImage = project.image.startsWith('/');

  return (
    <article className={`project-card${hasImage ? ' project-card--with-image' : ''}`}>
      {hasImage && (
        <figure className="project-card__media">
          <img src={project.image} alt={getLocalizedValue(project.title, language)} loading="lazy" />
        </figure>
      )}
      <h3>{getLocalizedValue(project.title, language)}</h3>
      <p>{getLocalizedValue(project.summary, language)}</p>
      <ProjectTechnologyList technologies={project.technologies} />
      <div className="project-card__actions">
        <Link to={`/projects/${project.slug}`} className="button button--secondary">
          {language === 'en' ? 'Case study' : 'Caso'}
          <ExternalLink size={15} />
        </Link>
        {project.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="button button--primary">
            <ExternalLink size={15} />
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
