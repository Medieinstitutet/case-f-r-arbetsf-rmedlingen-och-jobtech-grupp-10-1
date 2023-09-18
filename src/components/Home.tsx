import { DigiLayoutColumns } from '@digi/arbetsformedlingen-react';
import { mockResponsePostSearchQuery } from '../mockResponsePostSearchQuery';
import { IMatchByTextResponse } from '../models/IMatchByTextResponse';
import { getEnrichedOccupation } from '../services/enrichedOccupationsSearchService';
import { postSearchQuery } from '../services/relatedOccupationsSearchService';
import { RelatedOccupation } from './RelatedOccupation';
import {
  LayoutColumnsElement,
  LayoutColumnsVariation,
} from '@digi/arbetsformedlingen';

export const Home = () => {
  const handleClick = async () => {
    const postData = 'html css javascript';
    const result = await postSearchQuery(postData);
    console.log(result);
    
    return result;
  };
  const handleEnrichedClick = async () => {
    const id = 'GDHs_eoz_uKx';
    const result = await getEnrichedOccupation(id);
    console.log(result);
  };

  const response = mockResponsePostSearchQuery as IMatchByTextResponse;

  return (
    <>
      {/* <button onClick={handleClick}>Send mockdata</button> */}
      <DigiLayoutColumns
        afElement={LayoutColumnsElement.DIV}
        afVariation={LayoutColumnsVariation.TWO}
        style={{width: '80%'}}
      >
        {response.related_occupations.map((occupation) => (
          <RelatedOccupation key={occupation.id} occupation={occupation} />
        ))}
      </DigiLayoutColumns>
      {/* <button onClick={handleEnrichedClick}>Send mockdata to enriched</button> */}
    </>
  );
};
