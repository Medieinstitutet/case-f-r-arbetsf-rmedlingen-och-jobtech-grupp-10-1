import { getEnrichedOccupation } from '../services/enrichedOccupationsSearchService';
import { postSearchQuery } from '../services/relatedOccupationsSearchService';

export const Home = () => {
  const handleClick = async () => {
    const postData = 'html css javascript';
    const result = await postSearchQuery(postData);
    console.log(result);
  };
  const handleEnrichedClick = async () => {
    const id = 'GDHs_eoz_uKx';
    const result = await getEnrichedOccupation(id);
    console.log(result);
  };

  return (
    <>
      <button onClick={handleClick}>Send mockdata</button>
      <button onClick={handleEnrichedClick}>Send mockdata to enriched</button>
    </>
  );
};
