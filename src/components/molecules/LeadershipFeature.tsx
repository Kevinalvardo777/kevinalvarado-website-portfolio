interface LeadershipFeatureProps {
  title: string;
  description: string;
}

export default function LeadershipFeature({ title, description }: LeadershipFeatureProps) {
  return (
    <article className="leadership-feature">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
