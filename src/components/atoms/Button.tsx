import { cloneElement, isValidElement, type ButtonHTMLAttributes, type ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  asChild?: boolean;
}

export default function Button({ children, variant = 'primary', className = '', asChild = false, ...props }: ButtonProps) {
  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      className: `button button--${variant} ${className}`.trim(),
      ...children.props,
    });
  }

  return (
    <button className={`button button--${variant} ${className}`.trim()} type="button" {...props}>
      {children}
    </button>
  );
}
