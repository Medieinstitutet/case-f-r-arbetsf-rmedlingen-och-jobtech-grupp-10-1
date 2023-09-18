import { useParams } from 'react-router-dom';

export const EnrichedOccupation = () => {
  const { id } = useParams();
  return <h1>{id}</h1>;
};
