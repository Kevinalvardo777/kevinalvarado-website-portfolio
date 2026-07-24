import type { ExperienceItem } from '@/types';

interface ExperienceMetaProps {
  experience: ExperienceItem;
}

export default function ExperienceMeta({ experience }: ExperienceMetaProps) {
  return (
    <div className="experience-meta">
      <h3>{experience.company}</h3>
      <p>{experience.role.es}</p>
      <span>{experience.period.es}</span>
    </div>
  );
}
