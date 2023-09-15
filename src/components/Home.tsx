import { mockResponsePostSearchQuery } from '../mockResponsePostSearchQuery';
import { IMatchByTextResponse } from '../models/IMatchByTextResponse';
import { postSearchQuery } from '../services/relatedOccupationsSearchService';
import { RelatedOccupation } from './RelatedOccupation';

export const Home = () => {
  const handleClick = async () => {
    const postData = 'html css javascript';
    const result = await postSearchQuery(postData);
    return result;
  };

  const response = mockResponsePostSearchQuery as IMatchByTextResponse;

  return (
    <>
      <button onClick={handleClick}>Send mockdata</button>
      {response.related_occupations.map((occupation) => (
        <RelatedOccupation key={occupation.id} occupation={occupation} />
      ))}
    </>
  );
};
