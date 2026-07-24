import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ProjectDetailPage from '@/pages/ProjectDetailPage';
import NotFoundPage from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/projects/:slug',
    element: <ProjectDetailPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
