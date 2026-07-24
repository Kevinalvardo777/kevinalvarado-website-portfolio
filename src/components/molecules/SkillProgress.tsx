interface SkillProgressProps {
  label: string;
  value: number;
}

export default function SkillProgress({ label, value }: SkillProgressProps) {
  return (
    <div className="skill-progress">
      <div className="skill-progress__header">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="skill-progress__track">
        <div className="skill-progress__bar" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
