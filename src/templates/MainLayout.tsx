import type { ReactNode } from 'react';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import CookieOrPrivacyNotice from '@/components/organisms/CookieOrPrivacyNotice';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app-shell">
      <Header />
      <main id="main-content">{children}</main>
      <CookieOrPrivacyNotice />
      <Footer />
    </div>
  );
}
