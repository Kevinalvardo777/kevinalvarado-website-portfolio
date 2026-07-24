import LeadershipFeature from '@/components/molecules/LeadershipFeature';

const features = [
  { title: 'Liderazgo técnico', description: 'Acompañamiento a equipos frontend y toma de decisiones arquitectónicas.' },
  { title: 'Mentoring', description: 'Revisión de código y desarrollo de buenas prácticas en equipos distribuidos.' },
  { title: 'Colaboración', description: 'Comunicación eficaz con stakeholders técnicos y no técnicos.' },
];

export default function LeadershipSection() {
  return (
    <section className="section">
      <div className="container">
        <h2>Liderazgo</h2>
        <div className="leadership-grid">
          {features.map((feature) => (
            <LeadershipFeature key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
