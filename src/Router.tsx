import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { EnrichedOccupation } from './components/EnrichedOccupation';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/:id', element: <EnrichedOccupation /> },
    ],
  },
]);
