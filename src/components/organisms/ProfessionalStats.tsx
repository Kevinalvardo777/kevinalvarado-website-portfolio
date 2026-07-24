import StatCard from '@/components/molecules/StatCard';

export default function ProfessionalStats() {
  return (
    <section className="section">
      <div className="container stats-grid">
        <StatCard title="Experience" value="8+ years" description="Software engineering" />
        <StatCard title="Banking" value="4+ years" description="Financial institutions" />
        <StatCard title="Stack" value="Angular / React / TS" description="Frontend architecture" />
        <StatCard title="Leadership" value="Technical lead" description="Cross-functional teams" />
      </div>
    </section>
  );
}
