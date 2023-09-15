import { DigiLayoutColumns } from '@digi/arbetsformedlingen-react';
import { mockResponsePostSearchQuery } from '../mockResponsePostSearchQuery';
import { IMatchByTextResponse } from '../models/IMatchByTextResponse';
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
    return result;
  };

  const response = mockResponsePostSearchQuery as IMatchByTextResponse;

  return (
    <>
      <button onClick={handleClick}>Send mockdata</button>
      <DigiLayoutColumns
        afElement={LayoutColumnsElement.UL}
        afVariation={LayoutColumnsVariation.TWO}
      >
        {response.related_occupations.map((occupation) => (
          <RelatedOccupation key={occupation.id} occupation={occupation} />
        ))}
      </DigiLayoutColumns>
    </>
  );
};
