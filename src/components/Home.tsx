import { postSearchQuery } from '../services/relatedOccupationsSearchService';
import { RelatedOccupation } from './RelatedOccupation';

export const Home = () => {
  const handleClick = async () => {
    const postData = 'html css javascript';
    const result = await postSearchQuery(postData);
    console.log(result);
  };

  return (
    <>
      <button onClick={handleClick}>Send mockdata</button>
      <RelatedOccupation />
    </>
  );
};
