interface SkipLinkProps {
  href: string;
  label: string;
}

export default function SkipLink({ href, label }: SkipLinkProps) {
  return (
    <a className="skip-link" href={href}>
      {label}
    </a>
  );
}
