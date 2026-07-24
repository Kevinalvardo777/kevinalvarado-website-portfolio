import { Link } from 'react-router-dom';
import MainLayout from '@/templates/MainLayout';

export default function NotFoundPage() {
  return (
    <MainLayout>
      <section className="section">
        <div className="container not-found">
          <h1>Página no encontrada</h1>
          <p>La ruta solicitada no existe.</p>
          <Link to="/">Volver al inicio</Link>
        </div>
      </section>
    </MainLayout>
  );
}
