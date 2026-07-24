import type { ExperienceItem } from '@/types';
import ExperienceMeta from '@/components/molecules/ExperienceMeta';

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experiencia</h2>
        <div className="timeline">
          {experiences.map((experience) => (
            <article key={experience.company} className="timeline-item">
              <ExperienceMeta experience={experience} />
              <p>{experience.description.es}</p>
              <ul>
                {experience.highlights.map((item) => (
                  <li key={item.es}>{item.es}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
