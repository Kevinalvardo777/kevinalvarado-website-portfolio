import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectTechnologyList from '@/components/molecules/ProjectTechnologyList';
import type { Project } from '@/types';
import { useUiStore } from '@/store/uiStore';
import { getLocalizedValue } from '@/utils/locale';

interface ProjectDetailTemplateProps {
  project: Project;
}

export default function ProjectDetailTemplate({ project }: ProjectDetailTemplateProps) {
  const language = useUiStore((state) => state.language);
  const hasImage = project.image.startsWith('/');

  return (
    <article className="project-detail">
      <section className="project-detail__hero">
        <div className="container project-detail__hero-grid">
          <div>
            <Link to="/#projects" className="project-detail__back">
              <ArrowLeft size={17} />
              {language === 'en' ? 'Back to projects' : 'Volver a proyectos'}
            </Link>
            <span className="section-kicker">{project.confidentiality[language]}</span>
            <h1>{getLocalizedValue(project.title, language)}</h1>
            <p className="project-detail__lead">{getLocalizedValue(project.summary, language)}</p>
            <div className="project-detail__actions">
              <a href="/#contact" className="button button--primary">
                {language === 'en' ? 'Discuss a similar project' : 'Conversar un proyecto similar'}
              </a>
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="button button--secondary">
                  <ExternalLink size={16} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="project-detail__preview">
            {hasImage ? (
              <figure className="project-detail__preview-image">
                <img src={project.image} alt={getLocalizedValue(project.title, language)} />
              </figure>
            ) : (
              <div className="project-detail__preview-window" aria-hidden="true">
                <span />
                <span />
                <span />
                <div />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section project-detail__body">
        <div className="container project-detail__body-grid">
          <aside className="project-detail__aside">
            <h2>Stack</h2>
            <ProjectTechnologyList technologies={project.technologies} />
          </aside>
          <div className="project-detail__content">
            <section className="project-detail__panel">
              <span className="section-kicker">{language === 'en' ? 'Context' : 'Contexto'}</span>
              <h2>{language === 'en' ? 'Problem' : 'Problema'}</h2>
              <p>{getLocalizedValue(project.problem, language)}</p>
            </section>
            <section className="project-detail__panel project-detail__panel--accent">
              <span className="section-kicker">{language === 'en' ? 'Execution' : 'Ejecución'}</span>
              <h2>{language === 'en' ? 'Solution' : 'Solución'}</h2>
              <p>{getLocalizedValue(project.solution, language)}</p>
            </section>
            <div className="project-detail__columns">
              <section className="project-detail__panel">
                <h2>{language === 'en' ? 'Responsibilities' : 'Responsabilidades'}</h2>
                <ul>
                  {project.responsibilities.map((item) => (
                    <li key={item.es}>{getLocalizedValue(item, language)}</li>
                  ))}
                </ul>
              </section>
              <section className="project-detail__panel">
                <h2>{language === 'en' ? 'Architecture' : 'Arquitectura'}</h2>
                <p>{getLocalizedValue(project.architecture, language)}</p>
              </section>
            </div>
            <div className="project-detail__columns">
              <section className="project-detail__panel">
                <h2>{language === 'en' ? 'Challenges' : 'Retos'}</h2>
                <ul>
                  {project.challenges.map((item) => (
                    <li key={item.es}>{getLocalizedValue(item, language)}</li>
                  ))}
                </ul>
              </section>
              <section className="project-detail__panel">
                <h2>{language === 'en' ? 'Learnings' : 'Aprendizajes'}</h2>
                <ul>
                  {project.learnings.map((item) => (
                    <li key={item.es}>{getLocalizedValue(item, language)}</li>
                  ))}
                </ul>
              </section>
            </div>
            <Link to="/#projects" className="project-detail__next">
              {language === 'en' ? 'See more projects' : 'Ver más proyectos'}
              <ExternalLink size={17} />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
