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
import { RelatedOccupationsContext } from '../contexts/RelatedOccupationsContext';
import { useContext, useEffect } from 'react';
import { postSearchQuery } from '../services/relatedOccupationsSearchService';

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = async (id: string) => {
    const result = await getEnrichedOccupation(id);
    navigate(`/${id}`);
    console.log(result);
  };

  const { occupationsResponse, setOccupationsResponse } = useContext(
    RelatedOccupationsContext
  );

  // const response = mockResponsePostSearchQuery as IMatchByTextResponse;

  console.log(occupationsResponse);

  useEffect(() => {
    const getOccupations = async () => {
      const occupations = await postSearchQuery('sjuksöterska sjukhus medicin patient vård vårdare sjuk frisk astma');
      setOccupationsResponse(occupations);
    };
    getOccupations();
  }, []);

  useEffect(() => {
    console.log(occupationsResponse);
  }, [occupationsResponse]);

  return (
    <>
      <DigiLayoutColumns
        afElement={LayoutColumnsElement.UL}
        afVariation={LayoutColumnsVariation.TWO}
      >
        {occupationsResponse.related_occupations?.map((occupation) => (
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
