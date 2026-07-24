import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import ProjectTechnologyList from '@/components/molecules/ProjectTechnologyList';
import type { Project } from '@/types';
import { useUiStore } from '@/store/uiStore';
import { getLocalizedValue } from '@/utils/locale';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const language = useUiStore((state) => state.language);

  return (
    <article className="project-card">
      <h3>{getLocalizedValue(project.title, language)}</h3>
      <p>{getLocalizedValue(project.summary, language)}</p>
      <ProjectTechnologyList technologies={project.technologies} />
      <div className="project-card__actions">
        <Link to={`/projects/${project.slug}`}>
          {language === 'en' ? 'Case study' : 'Caso'}
          <ExternalLink size={15} />
        </Link>
        {project.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
            <Github size={15} />
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
