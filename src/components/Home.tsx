import { DigiLayoutColumns } from '@digi/arbetsformedlingen-react';
import { mockResponsePostSearchQuery } from '../mockResponsePostSearchQuery';
import { IMatchByTextResponse } from '../models/IMatchByTextResponse';
import { getEnrichedOccupation } from '../services/enrichedOccupationsSearchService';
import { RelatedOccupation } from './RelatedOccupation';
import {
  LayoutColumnsElement,
  LayoutColumnsVariation,
} from '@digi/arbetsformedlingen';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = async (id: string) => {
    const result = await getEnrichedOccupation(id);
    navigate(`/${id}`);
    console.log(result);
  };

  const response = mockResponsePostSearchQuery as IMatchByTextResponse;

  return (
    <>
      <DigiLayoutColumns
        afElement={LayoutColumnsElement.UL}
        afVariation={LayoutColumnsVariation.TWO}
      >
        {response.related_occupations.map((occupation) => (
          <RelatedOccupation
            key={occupation.id}
            occupation={occupation}
            handleClick={handleClick}
          />
        ))}
      </DigiLayoutColumns>
    </>
  );
};
