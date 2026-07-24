interface ProjectTechnologyListProps {
  technologies: string[];
}

export default function ProjectTechnologyList({ technologies }: ProjectTechnologyListProps) {
  return (
    <ul className="project-technologies">
      {technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  );
}
