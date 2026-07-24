import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectCard from '@/components/organisms/ProjectCard';
import type { Project } from '@/types';

const project: Project = {
  slug: 'banca-digital',
  title: { es: 'Banca digital', en: 'Digital banking' },
  summary: { es: 'Resumen', en: 'Summary' },
  problem: { es: 'Problema', en: 'Problem' },
  solution: { es: 'Solución', en: 'Solution' },
  responsibilities: [{ es: 'Arquitectura', en: 'Architecture' }],
  architecture: { es: 'Arquitectura', en: 'Architecture' },
  technologies: ['React', 'TypeScript'],
  challenges: [{ es: 'Desafío', en: 'Challenge' }],
  learnings: [{ es: 'Aprendizaje', en: 'Learning' }],
  image: 'abstract',
  confidentiality: { es: 'Confidencial', en: 'Confidential' },
  featured: true,
  links: [],
};

describe('ProjectCard', () => {
  it('renders project title and summary', () => {
    render(
      <MemoryRouter>
        <ProjectCard project={project} />
      </MemoryRouter>,
    );
    expect(screen.getByText(/banca digital/i)).toBeInTheDocument();
    expect(screen.getByText(/resumen/i)).toBeInTheDocument();
  });
});
