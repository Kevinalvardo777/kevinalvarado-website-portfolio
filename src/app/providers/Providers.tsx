import type { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/router';

interface ProvidersProps {
  children?: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
      {children}
    </HelmetProvider>
  );
}
