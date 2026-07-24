import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainLayout from '@/templates/MainLayout';
import ProjectDetailTemplate from '@/templates/ProjectDetailTemplate';
import { projects } from '@/data/projects';
import { useUiStore } from '@/store/uiStore';
import { getLocalizedValue } from '@/utils/locale';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const language = useUiStore((state) => state.language);
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <MainLayout>
        <section className="section">
          <div className="container">
            <h1>Project not found</h1>
            <p>El proyecto solicitado no está disponible.</p>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Helmet>
        <title>{getLocalizedValue(project.title, language)} | Kevin Alvarado Cornejo</title>
      </Helmet>
      <ProjectDetailTemplate project={project} />
    </MainLayout>
  );
}
