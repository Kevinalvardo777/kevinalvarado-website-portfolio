import { Helmet } from 'react-helmet-async';
import MainLayout from '@/templates/MainLayout';
import HeroSection from '@/components/organisms/HeroSection';
import ExpertiseSection from '@/components/organisms/ExpertiseSection';
import ProjectsGrid from '@/components/organisms/ProjectsGrid';
import CertificationsSection from '@/components/organisms/CertificationsSection';
import ContactSection from '@/components/organisms/ContactSection';
import { projects } from '@/data/projects';

export default function HomePage() {
  return (
    <MainLayout>
      <Helmet>
        <title>Kevin Alvarado Cornejo | Senior Frontend Developer</title>
        <meta name="description" content="Portafolio profesional de Kevin Alvarado Cornejo, Senior Frontend Developer y Frontend Technical Lead." />
      </Helmet>
      <HeroSection />
      <ExpertiseSection />
      <ProjectsGrid projects={projects} />
      <CertificationsSection />
      <ContactSection />
    </MainLayout>
  );
}
