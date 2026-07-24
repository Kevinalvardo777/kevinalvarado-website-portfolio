interface BreadcrumbProps {
  items: string[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </nav>
  );
}
