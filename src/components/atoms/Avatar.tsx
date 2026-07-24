interface AvatarProps {
  initials?: string;
  src?: string;
  alt?: string;
}

export default function Avatar({ initials = 'KA', src, alt = 'Avatar' }: AvatarProps) {
  return (
    <div className="avatar" role="img" aria-label={alt}>
      {src ? <img src={src} alt={alt} /> : <span>{initials}</span>}
    </div>
  );
}
