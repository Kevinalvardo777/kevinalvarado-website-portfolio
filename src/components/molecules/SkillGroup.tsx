import type { SkillCategory } from '@/types';

interface SkillGroupProps {
  category: SkillCategory;
}

export default function SkillGroup({ category }: SkillGroupProps) {
  return (
    <section className="skill-group" aria-label={category.title.es}>
      <h3>{category.title.es}</h3>
      <ul>
        {category.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
