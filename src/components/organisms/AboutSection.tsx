import { profile } from '@/data/profile';
import { useUiStore } from '@/store/uiStore';
import { getLocalizedValue } from '@/utils/locale';

export default function AboutSection() {
  const language = useUiStore((state) => state.language);
  return (
    <section id="about" className="section section--split">
      <div className="container">
        <h2>{language === 'en' ? 'About' : 'Acerca de'}</h2>
        <p>{getLocalizedValue(profile.description, language)}</p>
        <p>{language === 'en' ? 'I have worked on enterprise banking experiences, design systems and technical leadership in multidisciplinary teams.' : 'He trabajado en experiencias bancarias empresariales, design systems y liderazgo técnico en equipos multidisciplinarios.'}</p>
      </div>
    </section>
  );
}
