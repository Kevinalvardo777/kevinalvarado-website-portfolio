import { skillCategories } from '@/data/skills';

export default function TechnologyStack() {
  return (
    <section className="section">
      <div className="container">
        <h2>Stack técnico</h2>
        <div className="tech-stack-grid">
          {skillCategories.slice(0, 5).map((category) => (
            <article key={category.title.es} className="tech-card">
              <h3>{category.title.es}</h3>
              <p>{category.items.join(' • ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
