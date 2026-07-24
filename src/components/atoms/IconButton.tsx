import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  label: string;
}

export default function IconButton({ children, label, className = '', ...props }: IconButtonProps) {
  return (
    <button className={`icon-button ${className}`.trim()} aria-label={label} type="button" {...props}>
      {children}
    </button>
  );
}
