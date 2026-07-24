import type { ReactNode } from 'react';

interface ContactFieldProps {
  label: string;
  id: string;
  error?: string;
  children: ReactNode;
}

export default function ContactField({ label, id, error, children }: ContactFieldProps) {
  return (
    <div className="contact-field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error ? <p className="field-error" id={`${id}-error`}>{error}</p> : null}
    </div>
  );
}
