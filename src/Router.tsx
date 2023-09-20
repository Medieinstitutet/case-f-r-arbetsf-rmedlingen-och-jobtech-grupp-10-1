import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { EnrichedOccupation } from './components/EnrichedOccupation';
import ListRelatedOccupations from './components/ListRelatedOccupations';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/related-occupations', element: <ListRelatedOccupations /> },
      { path: '/related-occupations/:id', element: <EnrichedOccupation /> },
    ],
  },
]);
