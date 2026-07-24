import CertificationCard from '@/components/molecules/CertificationCard';
import { certifications } from '@/data/certifications';
import { useUiStore } from '@/store/uiStore';

export default function CertificationsSection() {
  const language = useUiStore((state) => state.language);

  return (
    <section id="certifications" className="section">
      <div className="container">
        <span className="section-kicker">{language === 'en' ? 'Credentials' : 'Credenciales'}</span>
        <h2>{language === 'en' ? 'Certifications and continuous learning' : 'Certificaciones y aprendizaje continuo'}</h2>
        <p className="section-lead">
          {language === 'en'
            ? 'Training that supports the stack, delivery practices and automation experience behind the work.'
            : 'Formación que respalda el stack, las prácticas de entrega y la experiencia de automatización detrás del trabajo.'}
        </p>
        <div className="certifications-grid">
          {certifications.map((certification) => (
            <CertificationCard key={certification.title.es} certification={certification} />
          ))}
        </div>
      </div>
    </section>
  );
}
